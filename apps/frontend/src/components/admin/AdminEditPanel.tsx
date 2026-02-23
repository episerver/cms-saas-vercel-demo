"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";

type SubField = {
  contentKey: string;
  fieldName: string;
  fieldType: "text" | "richtext" | "paragraph-image";
  subLabel: string;
  // For image fields
  imageContentKey?: string;
  imageFieldName?: string;
};

type EditableSection = {
  label: string;
  sectionType: "menu" | "paragraph-image";
  fields: SubField[];
};

// Editable sections for the admin panel
// Each section groups related fields together
const EDITABLE_SECTIONS: EditableSection[] = [
  // First section: WEEK MENY
  {
    label: "WEEK MENY",
    sectionType: "menu",
    fields: [
      {
        contentKey: "919dd394-9cce-4ef7-8bac-d91c71fb9a67",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 1",
      },
      {
        contentKey: "17191c87-e47a-4217-bbf6-1d2e57de994b",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 2",
      },
      {
        contentKey: "fd572f3f-b502-4a66-8c5b-5e7a45f4f1b4",
        fieldName: "text",
        fieldType: "richtext",
        subLabel: "Menu Content",
      },
    ],
  },
  // Second section: LUNCH MENY
  {
    label: "LUNCH MENY",
    sectionType: "menu",
    fields: [
      {
        contentKey: "78892e00-8399-4248-8f6a-0b7b0d257c9a",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 1",
      },
      {
        contentKey: "085f05d0-0fd5-4298-9db5-5248eb06ab42",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 2",
      },
      {
        contentKey: "dc923302-6631-4830-a02f-aac2dbdb1b50",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 3",
      },
      {
        contentKey: "b28bf798-8c52-4d3e-9f37-0c191f95c377",
        fieldName: "text",
        fieldType: "richtext",
        subLabel: "Menu Content",
      },
    ],
  },
  // Third section: ERBJUDANDE
  {
    label: "ERBJUDANDE",
    sectionType: "paragraph-image",
    fields: [
      {
        contentKey: "60f3dc64-12af-46be-86d4-13c7b971567a",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 1",
      },
      {
        contentKey: "3b70ab6a-4baa-42f2-8c43-2e2301e015a4",
        fieldName: "headingText",
        fieldType: "text",
        subLabel: "Heading 2",
      },
      {
        contentKey: "6b019fdd-bc9d-45b8-b812-28b9910c6135",
        fieldName: "text",
        fieldType: "paragraph-image",
        subLabel: "Text Content",
        imageContentKey: "9ad20570-98f5-412e-922e-ef78dc9c2164",
        imageFieldName: "imageLink",
      },
    ],
  },
];

type MenuItem = {
  title: string;
  price: string;
};

type ParsedMenu = {
  header: string;
  items: MenuItem[];
};

// Parse HTML to extract plain text content (for paragraph editing)
function htmlToPlainText(html: string): string {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent?.trim() || "";
  } catch {
    return html;
  }
}

// Escape HTML special characters to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Convert plain text back to HTML paragraph
function plainTextToHtml(text: string): string {
  // Split by newlines and wrap each in a paragraph
  const paragraphs = text.split(/\n+/).filter(p => p.trim());
  if (paragraphs.length === 0) return "<p>&nbsp;</p>";
  return paragraphs.map(p => `<p>${escapeHtml(p.trim())}</p>`).join("\n");
}

// Parse HTML table into structured menu data
function parseMenuHtml(html: string): ParsedMenu | null {
  try {
    // Create a temporary DOM element to parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Get header
    const headerEl = doc.querySelector(".menu_header h3, th h3");
    const header = headerEl?.textContent?.trim() || "";

    // Get menu items
    const items: MenuItem[] = [];
    const rows = doc.querySelectorAll(".lunch-menu-item, tr.lunch-menu-item");

    rows.forEach((row) => {
      const titleEl = row.querySelector(".td_title");
      const priceEl = row.querySelector(".price-tag");

      if (titleEl) {
        items.push({
          title: titleEl.textContent?.trim() || "",
          price: priceEl?.textContent?.trim() || "",
        });
      }
    });

    if (header || items.length > 0) {
      return { header, items };
    }
    return null;
  } catch {
    return null;
  }
}

// Convert structured menu back to HTML
function menuToHtml(menu: ParsedMenu): string {
  const itemsHtml = menu.items
    .map((item) => {
      const priceHtml = item.price
        ? `<td class="td_price"><div class="price-container"><div class="price"><div class="price-alt"><strong class="price-tag">${escapeHtml(item.price)}</strong></div></div></div></td>`
        : "";
      return `<tr class="lunch-menu-item">
<td class="td_title">${escapeHtml(item.title)}</td>
<td class="td_dbsk hidden-xs"><div class="incl-wrapper">&nbsp;</div></td>
${priceHtml}
</tr>`;
    })
    .join("\n");

  return `<table class="table lunch_menu animation">
<thead class="lunch-day-header">
<tr>
<th class="menu_header" colspan="3">
<h3>${escapeHtml(menu.header)}</h3>
</th>
</tr>
</thead>
<tbody class="lunch-day-content">
${itemsHtml}
</tbody>
</table>
<p>&nbsp;</p>`;
}

type CmsImage = {
  key: string;
  name: string;
  cmsRef: string;
};

// State for each field within a section
type FieldValue = {
  value: string;
  plainTextValue: string; // For paragraph-image: plain text version of HTML
  imageValue: string; // For paragraph-image type: image URL
};

type EditState = {
  isOpen: boolean;
  isLoading: boolean;
  selectedSection: EditableSection | null;
  // Map of contentKey -> field values
  fieldValues: Record<string, FieldValue>;
  isSaving: boolean;
  error: string | null;
  showSyncMessage: boolean;
  // Image picker state
  showImagePicker: boolean;
  images: CmsImage[];
  loadingImages: boolean;
  // Which field's image picker is open
  activeImageFieldKey: string | null;
};

export function AdminEditPanel() {
  const { isAuthenticated } = useAuth();
  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const refreshAbortRef = useRef<AbortController | null>(null);

  // Clean up timer and in-flight fetch on unmount
  useEffect(() => {
    return () => {
      if (refreshTimerRef.current) {
        clearTimeout(refreshTimerRef.current);
        refreshTimerRef.current = null;
      }
      if (refreshAbortRef.current) {
        refreshAbortRef.current.abort();
        refreshAbortRef.current = null;
      }
    };
  }, []);

  const [state, setState] = useState<EditState>({
    isOpen: false,
    isLoading: false,
    selectedSection: null,
    fieldValues: {},
    isSaving: false,
    error: null,
    showSyncMessage: false,
    showImagePicker: false,
    images: [],
    loadingImages: false,
    activeImageFieldKey: null,
  });

  // Find the richtext field in the current section for menu parsing
  const richtextField = useMemo(() => {
    if (!state.selectedSection) return null;
    return state.selectedSection.fields.find(f => f.fieldType === "richtext");
  }, [state.selectedSection]);

  // Parse menu from HTML for simple editing
  const parsedMenu = useMemo(() => {
    if (richtextField && state.fieldValues[richtextField.contentKey]?.value) {
      return parseMenuHtml(state.fieldValues[richtextField.contentKey].value);
    }
    return null;
  }, [richtextField, state.fieldValues]);

  // Update a menu item
  const updateMenuItem = useCallback(
    (index: number, field: "title" | "price", newValue: string) => {
      if (!parsedMenu || !richtextField) return;

      const updatedMenu = {
        ...parsedMenu,
        items: parsedMenu.items.map((item, i) =>
          i === index ? { ...item, [field]: newValue } : item,
        ),
      };
      setState((prev) => ({
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [richtextField.contentKey]: {
            ...prev.fieldValues[richtextField.contentKey],
            value: menuToHtml(updatedMenu),
          },
        },
      }));
    },
    [parsedMenu, richtextField],
  );

  // Update menu header
  const updateMenuHeader = useCallback(
    (newHeader: string) => {
      if (!parsedMenu || !richtextField) return;

      const updatedMenu = { ...parsedMenu, header: newHeader };
      setState((prev) => ({
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [richtextField.contentKey]: {
            ...prev.fieldValues[richtextField.contentKey],
            value: menuToHtml(updatedMenu),
          },
        },
      }));
    },
    [parsedMenu, richtextField],
  );

  // Add new menu item
  const addMenuItem = useCallback(() => {
    if (!parsedMenu || !richtextField) return;

    const updatedMenu = {
      ...parsedMenu,
      items: [...parsedMenu.items, { title: "New dish", price: "139 kr" }],
    };
    setState((prev) => ({
      ...prev,
      fieldValues: {
        ...prev.fieldValues,
        [richtextField.contentKey]: {
          ...prev.fieldValues[richtextField.contentKey],
          value: menuToHtml(updatedMenu),
        },
      },
    }));
  }, [parsedMenu, richtextField]);

  // Remove menu item
  const removeMenuItem = useCallback(
    (index: number) => {
      if (!parsedMenu || !richtextField) return;

      const updatedMenu = {
        ...parsedMenu,
        items: parsedMenu.items.filter((_, i) => i !== index),
      };
      setState((prev) => ({
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [richtextField.contentKey]: {
            ...prev.fieldValues[richtextField.contentKey],
            value: menuToHtml(updatedMenu),
          },
        },
      }));
    },
    [parsedMenu, richtextField],
  );

  // Open image picker and fetch images from CMS
  const openImagePicker = useCallback(async (fieldKey: string) => {
    setState((prev) => ({
      ...prev,
      showImagePicker: true,
      loadingImages: true,
      activeImageFieldKey: fieldKey,
    }));

    try {
      const res = await fetch('/api/cms/images');
      const data = await res.json();

      if (data.success) {
        setState((prev) => ({
          ...prev,
          loadingImages: false,
          images: data.images || [],
        }));
      } else {
        setState((prev) => ({
          ...prev,
          loadingImages: false,
          error: data.error || 'Failed to load images',
        }));
      }
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loadingImages: false,
        error: err instanceof Error ? err.message : 'Failed to load images',
      }));
    }
  }, []);

  // Select an image from the picker
  const selectImage = useCallback((cmsRef: string) => {
    setState((prev) => {
      if (!prev.activeImageFieldKey) return prev;
      return {
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [prev.activeImageFieldKey]: {
            ...prev.fieldValues[prev.activeImageFieldKey],
            imageValue: cmsRef,
          },
        },
        showImagePicker: false,
        activeImageFieldKey: null,
      };
    });
  }, []);

  // Close image picker
  const closeImagePicker = useCallback(() => {
    setState((prev) => ({ ...prev, showImagePicker: false, activeImageFieldKey: null }));
  }, []);

  // Update a text field value
  const updateFieldValue = useCallback((contentKey: string, value: string) => {
    setState((prev) => {
      const existing = prev.fieldValues[contentKey] || { value: "", plainTextValue: "", imageValue: "" };
      return {
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [contentKey]: {
            ...existing,
            value,
          },
        },
      };
    });
  }, []);

  // Update a plain text value (for paragraph-image)
  const updatePlainTextValue = useCallback((contentKey: string, plainTextValue: string) => {
    setState((prev) => {
      const existing = prev.fieldValues[contentKey] || { value: "", plainTextValue: "", imageValue: "" };
      return {
        ...prev,
        fieldValues: {
          ...prev.fieldValues,
          [contentKey]: {
            ...existing,
            plainTextValue,
          },
        },
      };
    });
  }, []);

  const openEditor = useCallback(async (section: EditableSection) => {
    setState((prev) => ({
      ...prev,
      isOpen: true,
      isLoading: true,
      selectedSection: section,
      fieldValues: {},
      error: null,
    }));

    // Fetch current content for all fields in the section
    try {
      const fieldValues: Record<string, FieldValue> = {};

      // Fetch all fields in parallel
      const fetchPromises = section.fields.map(async (field) => {
        const res = await fetch(
          `/api/cms/content/get?contentKey=${field.contentKey}&fieldName=${field.fieldName}&locale=en`,
        );
        const data = await res.json();
        const fieldValue: FieldValue = {
          value: data.success ? (data.value ?? "") : "",
          plainTextValue: "",
          imageValue: "",
        };

        // For paragraph-image, extract plain text and fetch image
        if (field.fieldType === "paragraph-image") {
          fieldValue.plainTextValue = htmlToPlainText(fieldValue.value);

          if (field.imageContentKey && field.imageFieldName) {
            const imageRes = await fetch(
              `/api/cms/content/get?contentKey=${field.imageContentKey}&fieldName=${field.imageFieldName}&locale=en`,
            );
            const imageData = await imageRes.json();
            fieldValue.imageValue = imageData.success ? (imageData.value?.url || imageData.value || "") : "";
          }
        }

        return { contentKey: field.contentKey, fieldValue };
      });

      const results = await Promise.all(fetchPromises);
      results.forEach(({ contentKey, fieldValue }) => {
        fieldValues[contentKey] = fieldValue;
      });

      setState((prev) => ({
        ...prev,
        isLoading: false,
        fieldValues,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Failed to load content",
      }));
    }
  }, []);

  const closeEditor = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isOpen: false,
      selectedSection: null,
      fieldValues: {},
      error: null,
    }));
  }, []);

  const saveChanges = useCallback(async () => {
    if (!state.selectedSection) return;

    setState((prev) => ({ ...prev, isSaving: true, error: null }));

    try {
      // IMPORTANT: Save fields SEQUENTIALLY to avoid race conditions
      // Each save fetches the latest composition, updates one field, and PATCHes
      // Parallel saves would cause race conditions where the last PATCH overwrites others
      for (const field of state.selectedSection.fields) {
        const fieldValue = state.fieldValues[field.contentKey];
        if (!fieldValue) continue;

        // Determine the value to save
        let valueToSave = fieldValue.value;
        if (field.fieldType === "paragraph-image") {
          valueToSave = plainTextToHtml(fieldValue.plainTextValue);
        }
        // Save the main field
        const res = await fetch("/api/cms/content/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contentKey: field.contentKey,
            fieldName: field.fieldName,
            value: valueToSave,
            locale: "en",
          }),
        });

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.error || `Failed to save ${field.subLabel}`);
        }

        // For paragraph-image, also save the image (sequentially after the text)
        if (field.fieldType === "paragraph-image" && field.imageContentKey && field.imageFieldName) {
          const imageRes = await fetch("/api/cms/content/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contentKey: field.imageContentKey,
              fieldName: field.imageFieldName,
              value: fieldValue.imageValue,
              locale: "en",
            }),
          });

          const imageData = await imageRes.json();
          if (!imageData.success) {
            throw new Error(imageData.error || "Failed to save image");
          }
        }
      }

      setState((prev) => ({
        ...prev,
        isOpen: false,
        isSaving: false,
        showSyncMessage: true,
      }));

      // Wait for Optimizely Graph to sync, then refresh
      const abortController = new AbortController();
      refreshAbortRef.current = abortController;
      refreshTimerRef.current = setTimeout(async () => {
        refreshTimerRef.current = null;
        if (abortController.signal.aborted) return;
        try {
          // Call the refresh endpoint to force Next.js cache revalidation
          await fetch("/api/cms/refresh", { method: "POST", signal: abortController.signal });
        } catch (e) {
          if (abortController.signal.aborted) return;
          console.error("Refresh endpoint failed:", e);
        }
        if (abortController.signal.aborted) return;
        // Reload the page
        window.location.reload();
      }, 10000);
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isSaving: false,
        error: err instanceof Error ? err.message : "Failed to save",
      }));
    }
  }, [state.selectedSection, state.fieldValues]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Sync message banner */}
      {state.showSyncMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg border border-blue-600 flex items-center gap-3">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>
            Saved! Syncing with content delivery... Page will refresh in ~10 seconds.
          </span>
        </div>
      )}

      {/* Floating Edit Panel */}
      {!state.showSyncMessage && (
        <div className="fixed top-20 right-4 z-[9999]">
          <div className="bg-white rounded-lg shadow-lg border border-blue-600 p-2">
            <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
              Edit Content
            </div>
            {EDITABLE_SECTIONS.map((section, index) => (
              <button
                key={index}
                onClick={() => openEditor(section)}
                className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {state.isOpen && state.selectedSection && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={closeEditor}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Edit {state.selectedSection.label}
            </h2>

            {state.isLoading ? (
              <div className="flex items-center justify-center py-12">
                <svg
                  className="animate-spin h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="ml-3 text-gray-600">
                  Loading current content...
                </span>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {/* Render all fields in the section */}
                  {state.selectedSection.fields.map((field) => {
                    const fieldValue = state.fieldValues[field.contentKey];

                    if (field.fieldType === "text") {
                      // Text field (headings)
                      return (
                        <div key={field.contentKey}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.subLabel}
                          </label>
                          <input
                            type="text"
                            value={fieldValue?.value || ""}
                            onChange={(e) => updateFieldValue(field.contentKey, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                            placeholder="Enter text..."
                            disabled={state.isSaving}
                          />
                        </div>
                      );
                    }

                    if (field.fieldType === "paragraph-image") {
                      // Paragraph + Image editor
                      return (
                        <div key={field.contentKey} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-gray-800">{field.subLabel}</h3>

                          {/* Paragraph text */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Text Content
                            </label>
                            <textarea
                              value={fieldValue?.plainTextValue || ""}
                              onChange={(e) => updatePlainTextValue(field.contentKey, e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] text-gray-900"
                              placeholder="Enter paragraph text..."
                              disabled={state.isSaving}
                            />
                          </div>

                          {/* Image Picker */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Image
                            </label>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => openImagePicker(field.contentKey)}
                                disabled={state.isSaving}
                                className="px-4 py-2 bg-verdansk text-vulcan font-semibold rounded-lg hover:opacity-80 disabled:opacity-50 flex items-center gap-2"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Choose Image
                              </button>
                              {fieldValue?.imageValue && (
                                <span className="text-sm text-gray-600 truncate max-w-[200px]">
                                  {state.images.find(img => img.cmsRef === fieldValue.imageValue)?.name || fieldValue.imageValue.replace('cms://content/', '')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    if (field.fieldType === "richtext") {
                      // Rich text menu editor
                      const menuData = parsedMenu;

                      if (menuData) {
                        return (
                          <div key={field.contentKey} className="space-y-4 p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-medium text-gray-800">{field.subLabel}</h3>

                            {/* Menu header */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Menu Header
                              </label>
                              <input
                                type="text"
                                value={menuData.header}
                                onChange={(e) => updateMenuHeader(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                disabled={state.isSaving}
                              />
                            </div>

                            {/* Menu items */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Menu Items
                              </label>
                              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                                {menuData.items.map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex gap-2 items-center p-2 bg-white rounded-lg"
                                  >
                                    <input
                                      type="text"
                                      value={item.title}
                                      onChange={(e) => updateMenuItem(index, "title", e.target.value)}
                                      className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                                      placeholder="Dish name"
                                      disabled={state.isSaving}
                                    />
                                    <input
                                      type="text"
                                      value={item.price}
                                      onChange={(e) => updateMenuItem(index, "price", e.target.value)}
                                      className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                                      placeholder="Price"
                                      disabled={state.isSaving}
                                    />
                                    <button
                                      onClick={() => removeMenuItem(index)}
                                      className="p-2 text-red-500 hover:bg-red-50 rounded"
                                      disabled={state.isSaving}
                                      title="Remove item"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <button
                                onClick={addMenuItem}
                                className="mt-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-1"
                                disabled={state.isSaving}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                                Add Item
                              </button>
                            </div>
                          </div>
                        );
                      }

                      // Fallback textarea for non-menu rich text
                      return (
                        <div key={field.contentKey}>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.subLabel}
                          </label>
                          <textarea
                            value={fieldValue?.value || ""}
                            onChange={(e) => updateFieldValue(field.contentKey, e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] text-gray-900"
                            placeholder="Enter content..."
                            disabled={state.isSaving}
                          />
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>

                {state.error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    <strong>Error:</strong> {state.error}
                  </div>
                )}

                <div className="flex gap-4 justify-end mt-6">
                  <button
                    onClick={closeEditor}
                    disabled={state.isSaving}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    disabled={state.isSaving}
                    className="px-6 py-3 bg-azure text-vulcan rounded-lg font-bold hover:bg-azure/90 disabled:opacity-50 border-2 border-azure flex items-center gap-2"
                  >
                    {state.isSaving ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        SAVE & PUBLISH
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {/* Image Picker Modal */}
      {state.showImagePicker && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[10000]"
            onClick={closeImagePicker}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10001] bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Choose Image</h3>
              <button
                onClick={closeImagePicker}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {state.loadingImages ? (
              <div className="flex items-center justify-center py-12">
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="ml-3 text-gray-600">Loading images...</span>
              </div>
            ) : state.images.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No images found in CMS
              </div>
            ) : (
              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-3 gap-3">
                  {state.images.map((image) => {
                    const activeFieldValue = state.activeImageFieldKey
                      ? state.fieldValues[state.activeImageFieldKey]
                      : null;
                    const isSelected = activeFieldValue?.imageValue === image.cmsRef;

                    return (
                      <button
                        key={image.key}
                        onClick={() => selectImage(image.cmsRef)}
                        className={`p-3 border-2 rounded-lg text-left hover:border-blue-500 transition-colors ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-700 truncate">{image.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
