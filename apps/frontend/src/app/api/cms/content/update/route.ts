import { NextResponse, type NextRequest } from "next/server";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

const AUTH_COOKIE_NAME = process.env.CMS_AUTH_COOKIE_NAME || "cms_admin_token";
const CMS_AUTH_TOKEN_SECRET = process.env.CMS_AUTH_TOKEN_SECRET;

if (!CMS_AUTH_TOKEN_SECRET) {
  throw new Error("CMS_AUTH_TOKEN_SECRET environment variable is required");
}

// The parent Experience key for the homepage (Mosey Bank)
const HOMEPAGE_EXPERIENCE_KEY = "7e9d73a0f7bd416aab12ef33d1d239c6";

// CMS API configuration
const CMS_API_BASE = "https://api.cms.optimizely.com";
const CMS_CLIENT_ID = process.env.OPTIMIZELY_CMS_CLIENT_ID;
const CMS_CLIENT_SECRET = process.env.OPTIMIZELY_CMS_CLIENT_SECRET;

if (!CMS_CLIENT_ID) {
  throw new Error("OPTIMIZELY_CMS_CLIENT_ID environment variable is required");
}
if (!CMS_CLIENT_SECRET) {
  throw new Error("OPTIMIZELY_CMS_CLIENT_SECRET environment variable is required");
}

// Get OAuth token from Optimizely CMS
async function getAccessToken(): Promise<string> {
  const res = await fetch(`${CMS_API_BASE}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CMS_CLIENT_ID!,
      client_secret: CMS_CLIENT_SECRET!,
    }).toString(),
  });
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`OAuth token request failed: ${res.status} - ${errorBody}`);
  }
  const data = await res.json();
  if (!data.access_token) {
    throw new Error("OAuth response missing access_token");
  }
  return data.access_token;
}

type UpdateContentRequest = {
  contentKey: string; // This is the element ID within the composition
  fieldName: string;
  value: string;
  locale?: string;
  parentKey?: string; // Optional parent experience key
};

type UpdateContentResponse = {
  success: boolean;
  error?: string;
};

function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return { valid: false };

    const payload = Buffer.from(payloadB64, "base64").toString("utf-8");
    const hmac = crypto.createHmac("sha256", CMS_AUTH_TOKEN_SECRET!);
    hmac.update(payload);
    const expectedSignature = hmac.digest("hex");

    const sigBuf = Buffer.from(signature, "utf8");
    const expectedBuf = Buffer.from(expectedSignature, "utf8");
    if (sigBuf.length !== expectedBuf.length) return { valid: false };
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return { valid: false };

    const data = JSON.parse(payload);
    if (data.exp < Date.now()) return { valid: false };

    return { valid: true, email: data.email };
  } catch {
    return { valid: false };
  }
}

// Find and update element in the composition tree by its ID
// The composition is a tree structure with nodes containing nested nodes
// Each component node has a component.properties object with the field values
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updateElementInComposition(
  composition: any,
  elementId: string,
  fieldName: string,
  newValue: string,
): boolean {
  if (!composition || !composition.nodes) {
    console.log("No composition or nodes found");
    return false;
  }

  console.log(`Searching for element ${elementId} in composition`);
  return traverseAndUpdateComposition(
    composition.nodes,
    elementId,
    fieldName,
    newValue,
  );
}

// Check if a field value is rich text (HTML format)
function isRichTextField(value: unknown): boolean {
  if (typeof value !== "string") return false;
  // Check if the value looks like HTML (contains tags)
  return /<[^>]+>/.test(value);
}

// Convert plain text to simple HTML paragraph
function wrapInHtml(text: string): string {
  // Escape HTML special characters
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return `<p>${escaped}</p>`;
}

// Recursively traverse composition nodes to find and update the target element
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function traverseAndUpdateComposition(
  nodes: any[],
  elementId: string,
  fieldName: string,
  newValue: string,
): boolean {
  for (const node of nodes) {
    // Check if this node is the one we're looking for
    if (node.id === elementId) {
      console.log(`Found element ${elementId}!`);

      if (node.component && node.component.properties) {
        if (fieldName in node.component.properties) {
          const currentValue = node.component.properties[fieldName];
          console.log(`Found field ${fieldName}, updating...`);
          console.log(`Old value: "${currentValue}"`);
          console.log(`New value: "${newValue}"`);

          // If the current value is HTML (rich text field), wrap the new value in HTML
          if (isRichTextField(currentValue) && !isRichTextField(newValue)) {
            console.log("Converting plain text to HTML for rich text field");
            node.component.properties[fieldName] = wrapInHtml(newValue);
          } else {
            node.component.properties[fieldName] = newValue;
          }
          return true;
        } else {
          console.log(
            `Field ${fieldName} not found. Available fields:`,
            Object.keys(node.component.properties),
          );
        }
      } else {
        console.log("Node has no component.properties");
      }
    }

    // Recursively check child nodes
    if (node.nodes && Array.isArray(node.nodes)) {
      const found = traverseAndUpdateComposition(
        node.nodes,
        elementId,
        fieldName,
        newValue,
      );
      if (found) return true;
    }
  }

  return false;
}

async function handler(
  req: NextRequest,
): Promise<NextResponse<UpdateContentResponse>> {
  // Verify authentication
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!token || !verifyToken(token).valid) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  try {
    const body: UpdateContentRequest = await req.json();
    const { contentKey, fieldName, value, locale = "en", parentKey } = body;

    if (!contentKey) {
      return NextResponse.json(
        { success: false, error: "Content key is required" },
        { status: 400 },
      );
    }

    if (!fieldName) {
      return NextResponse.json(
        { success: false, error: "Field name is required" },
        { status: 400 },
      );
    }

    // Determine the experience key to use
    const experienceKey = parentKey || HOMEPAGE_EXPERIENCE_KEY;

    console.log(`=== CMS Content Update ===`);
    console.log(`contentKey (element ID): ${contentKey}`);
    console.log(`fieldName: ${fieldName}`);
    console.log(`value: ${value}`);
    console.log(`experienceKey: ${experienceKey}`);

    // Get OAuth token
    const accessToken = await getAccessToken();
    const authHeader = { Authorization: `Bearer ${accessToken}` };

    // Get list of versions using preview3/experimental API (has composition data)
    const versionsUrl = `${CMS_API_BASE}/preview3/experimental/content/${experienceKey}/versions?statuses=published,draft`;
    const versionsRes = await fetch(versionsUrl, {
      headers: authHeader,
      cache: "no-store",
    });

    if (!versionsRes.ok) {
      const errorBody = await versionsRes.text();
      console.error(
        `Failed to fetch versions for experience ${experienceKey}:`,
        versionsRes.status,
        errorBody,
      );
      return NextResponse.json(
        {
          success: false,
          error: `Failed to fetch content versions: ${versionsRes.status}`,
        },
        { status: versionsRes.status >= 400 && versionsRes.status < 500 ? versionsRes.status : 502 },
      );
    }

    const versionsData = await versionsRes.json();

    if (!versionsData.items || versionsData.items.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Experience not found",
        },
        { status: 404 },
      );
    }

    // Get the latest version (prefer draft, fallback to published)
    const currentVersion =
      versionsData.items.find(
        (v: { status: string }) => v.status === "draft",
      ) || versionsData.items[0];

    if (!currentVersion.version) {
      return NextResponse.json(
        { success: false, error: "Version not found" },
        { status: 404 },
      );
    }

    console.log(
      "Current version:",
      currentVersion.version,
      "status:",
      currentVersion.status,
    );

    // Get the full content with composition using preview3/experimental
    const contentRes = await fetch(
      `${CMS_API_BASE}/preview3/experimental/content/${experienceKey}/versions/${currentVersion.version}?locale=${locale}`,
      { headers: authHeader, cache: 'no-store' },
    );
    const fullContent = await contentRes.json();

    const composition = fullContent.composition;
    if (!composition) {
      return NextResponse.json(
        {
          success: false,
          error: "Content has no composition",
        },
        { status: 400 },
      );
    }

    console.log(
      "Got experience content, searching for element in composition...",
    );

    // Update the element within the experience's composition tree
    const updated = updateElementInComposition(
      composition,
      contentKey,
      fieldName,
      value,
    );

    if (!updated) {
      return NextResponse.json(
        {
          success: false,
          error: `Could not find element ${contentKey} with field ${fieldName} in experience`,
        },
        { status: 404 },
      );
    }

    console.log("Element found and updated, saving experience...");

    // Use PATCH to update the existing version with the updated composition
    const patchRes = await fetch(
      `${CMS_API_BASE}/preview3/experimental/content/${experienceKey}/versions/${currentVersion.version}?locale=${locale}&skipValidation=true`,
      {
        method: "PATCH",
        headers: {
          ...authHeader,
          "Content-Type": "application/merge-patch+json",
        },
        body: JSON.stringify({
          composition,
          status: "published",
        }),
      },
    );

    if (!patchRes.ok) {
      const errorBody = await patchRes.text();
      console.error("PATCH failed:", patchRes.status, errorBody);
      return NextResponse.json(
        {
          success: false,
          error: `PATCH failed: ${patchRes.status} - ${errorBody}`,
        },
        { status: 500 },
      );
    }

    const patchResult = await patchRes.json();
    console.log(
      "PATCH result status:",
      patchResult.status,
      "version:",
      patchResult.version,
    );

    console.log("Experience saved successfully!");

    // Revalidate pages to show updated content
    revalidatePath("/");
    revalidatePath("/en");

    // Trigger the publish webhook
    const publishToken = process.env.OPTIMIZELY_PUBLISH_TOKEN;
    const baseUrl = process.env.SITE_DOMAIN || "http://localhost:3000";
    try {
      await fetch(
        `${baseUrl}/api/content/publish`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publishToken}`,
          },
          body: JSON.stringify({
            type: "content.published",
            data: { contentKey: experienceKey },
          }),
        },
      );
    } catch (err) {
      console.error("Publish webhook failed (non-critical):", err);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating content:", error);
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}

export const POST = handler;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
