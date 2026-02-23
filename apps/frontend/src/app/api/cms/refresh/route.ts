import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Force revalidation of all pages after content update
 * This endpoint is called by the admin panel after saving changes
 * to ensure the frontend displays the latest content.
 */
export async function POST(request: NextRequest) {
  const apiKey =
    request.headers.get("authorization")?.replace("Bearer ", "") ??
    request.headers.get("x-api-key");
  const serverSecret = process.env.CACHE_REVALIDATE_KEY;

  if (!serverSecret || apiKey !== serverSecret) {
    console.warn(
      "Unauthorized revalidation attempt at:",
      new Date().toISOString()
    );
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    // Revalidate any tagged data (Optimizely Graph queries use tags)
    try {
      revalidateTag("opti-graph");
    } catch {
      // Tag might not exist, that's ok
    }

    // Revalidate the main paths with layout type (clears full route cache)
    revalidatePath("/", "layout");
    revalidatePath("/en", "layout");

    // Also revalidate as pages
    revalidatePath("/");
    revalidatePath("/en");

    console.log("Cache revalidated at:", new Date().toISOString());

    return NextResponse.json(
      { success: true, timestamp: Date.now() },
      { headers: { 'Cache-Control': 'no-store, must-revalidate' } }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { success: false, error: "Revalidation failed" },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
