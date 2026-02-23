'use client'

import { useState, useCallback, useMemo } from 'react'
import { useAuth } from './AuthContext'

type MenuItem = {
  title: string
  price: string
}

type ParsedMenu = {
  header: string
  items: MenuItem[]
}

type ParsedList = {
  title: string
  items: string[]
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Parse HTML list into structured data (for opening hours, etc.)
function parseListHtml(html: string): ParsedList | null {
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    // Look for a title (p with class or just first p before ul)
    const titleEl = doc.querySelector('p.small-title, p:first-of-type')
    const title = titleEl?.textContent?.trim() || ''

    // Find list items
    const items: string[] = []
    const listItems = doc.querySelectorAll('ul li, ol li')
    listItems.forEach((li) => {
      const text = li.textContent?.trim()
      if (text) {
        items.push(text)
      }
    })

    if (items.length > 0) {
      return { title, items }
    }
    return null
  } catch {
    return null
  }
}

// Convert structured list back to HTML
function listToHtml(list: ParsedList): string {
  const itemsHtml = list.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('\n')
  const titleHtml = list.title ? `<p class="small-title">${escapeHtml(list.title)}</p>\n` : ''
  return `${titleHtml}<ul class="list-properties">
${itemsHtml}
</ul>
<p>&nbsp;</p>`
}

// Parse HTML table into structured menu data
function parseMenuHtml(html: string): ParsedMenu | null {
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const headerEl = doc.querySelector('.menu_header h3, th h3')
    const header = headerEl?.textContent?.trim() || ''

    const items: MenuItem[] = []
    const rows = doc.querySelectorAll('.lunch-menu-item, tr.lunch-menu-item')

    rows.forEach((row) => {
      const titleEl = row.querySelector('.td_title')
      const priceEl = row.querySelector('.price-tag')

      if (titleEl) {
        items.push({
          title: titleEl.textContent?.trim() || '',
          price: priceEl?.textContent?.trim() || '',
        })
      }
    })

    if (header || items.length > 0) {
      return { header, items }
    }
    return null
  } catch {
    return null
  }
}

// Convert structured menu back to HTML
function menuToHtml(menu: ParsedMenu): string {
  const itemsHtml = menu.items
    .map((item) => {
      const priceHtml = item.price
        ? `<td class="td_price"><div class="price-container"><div class="price"><div class="price-alt"><strong class="price-tag">${escapeHtml(item.price)}</strong></div></div></div></td>`
        : ''
      return `<tr class="lunch-menu-item">
<td class="td_title">${escapeHtml(item.title)}</td>
<td class="td_dbsk hidden-xs"><div class="incl-wrapper">&nbsp;</div></td>
${priceHtml}
</tr>`
    })
    .join('\n')

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
<p>&nbsp;</p>`
}

type EditableRichTextButtonProps = {
  contentKey: string | null
  fieldName: string
  locale?: string
  children: React.ReactNode
}

type EditState = {
  isOpen: boolean
  isLoading: boolean
  html: string
  isSaving: boolean
  error: string | null
  showSyncMessage: boolean
}

/**
 * Wrapper that adds an edit button for rich text content.
 * When clicked, opens a modal to edit the content (with menu parsing if applicable).
 */
export function EditableRichTextButton({
  contentKey,
  fieldName,
  locale = 'en',
  children,
}: EditableRichTextButtonProps) {
  const { isAuthenticated } = useAuth()

  const [state, setState] = useState<EditState>({
    isOpen: false,
    isLoading: false,
    html: '',
    isSaving: false,
    error: null,
    showSyncMessage: false,
  })

  // Parse menu from HTML
  const parsedMenu = useMemo(() => {
    if (state.html) {
      return parseMenuHtml(state.html)
    }
    return null
  }, [state.html])

  // Parse list from HTML (for opening hours, etc.)
  const parsedList = useMemo(() => {
    if (state.html && !parsedMenu) {
      return parseListHtml(state.html)
    }
    return null
  }, [state.html, parsedMenu])

  const openEditor = useCallback(async () => {
    if (!contentKey) return

    setState(prev => ({ ...prev, isOpen: true, isLoading: true, error: null }))

    try {
      const res = await fetch(`/api/cms/content/get?contentKey=${contentKey}&fieldName=${fieldName}&locale=${locale}`)
      const data = await res.json()

      if (data.success) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          html: data.value || '',
        }))
      } else {
        throw new Error(data.error || 'Failed to load content')
      }
    } catch (err) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to load content',
      }))
    }
  }, [contentKey, fieldName, locale])

  const closeEditor = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false, error: null }))
  }, [])

  const updateMenuItem = useCallback((index: number, field: 'title' | 'price', newValue: string) => {
    if (!parsedMenu) return

    const updatedMenu = {
      ...parsedMenu,
      items: parsedMenu.items.map((item, i) =>
        i === index ? { ...item, [field]: newValue } : item
      ),
    }
    setState(prev => ({ ...prev, html: menuToHtml(updatedMenu) }))
  }, [parsedMenu])

  const updateMenuHeader = useCallback((newHeader: string) => {
    if (!parsedMenu) return
    const updatedMenu = { ...parsedMenu, header: newHeader }
    setState(prev => ({ ...prev, html: menuToHtml(updatedMenu) }))
  }, [parsedMenu])

  const addMenuItem = useCallback(() => {
    if (!parsedMenu) return
    const updatedMenu = {
      ...parsedMenu,
      items: [...parsedMenu.items, { title: 'New dish', price: '139 kr' }],
    }
    setState(prev => ({ ...prev, html: menuToHtml(updatedMenu) }))
  }, [parsedMenu])

  const removeMenuItem = useCallback((index: number) => {
    if (!parsedMenu) return
    const updatedMenu = {
      ...parsedMenu,
      items: parsedMenu.items.filter((_, i) => i !== index),
    }
    setState(prev => ({ ...prev, html: menuToHtml(updatedMenu) }))
  }, [parsedMenu])

  // List editing callbacks
  const updateListTitle = useCallback((newTitle: string) => {
    if (!parsedList) return
    const updatedList = { ...parsedList, title: newTitle }
    setState(prev => ({ ...prev, html: listToHtml(updatedList) }))
  }, [parsedList])

  const updateListItem = useCallback((index: number, newValue: string) => {
    if (!parsedList) return
    const updatedList = {
      ...parsedList,
      items: parsedList.items.map((item, i) => (i === index ? newValue : item)),
    }
    setState(prev => ({ ...prev, html: listToHtml(updatedList) }))
  }, [parsedList])

  const addListItem = useCallback(() => {
    if (!parsedList) return
    const updatedList = {
      ...parsedList,
      items: [...parsedList.items, 'New item'],
    }
    setState(prev => ({ ...prev, html: listToHtml(updatedList) }))
  }, [parsedList])

  const removeListItem = useCallback((index: number) => {
    if (!parsedList) return
    const updatedList = {
      ...parsedList,
      items: parsedList.items.filter((_, i) => i !== index),
    }
    setState(prev => ({ ...prev, html: listToHtml(updatedList) }))
  }, [parsedList])

  const saveChanges = useCallback(async () => {
    if (!contentKey) return

    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey,
          fieldName,
          value: state.html,
          locale,
        }),
      })

      const data = await res.json()
      if (!data.success) {
        throw new Error(data.error || 'Failed to save')
      }

      setState(prev => ({
        ...prev,
        isOpen: false,
        isSaving: false,
        showSyncMessage: true,
      }))

      // Wait for sync then refresh
      setTimeout(async () => {
        try {
          await fetch('/api/cms/refresh', { method: 'POST' })
        } catch (e) {
          console.error('Refresh failed:', e)
        }
        window.location.reload()
      }, 10000)
    } catch (err) {
      setState(prev => ({
        ...prev,
        isSaving: false,
        error: err instanceof Error ? err.message : 'Failed to save',
      }))
    }
  }, [contentKey, fieldName, state.html, locale])

  // If not authenticated or no content key, just render children as-is
  if (!isAuthenticated || !contentKey) {
    return <>{children}</>
  }

  return (
    <>
      {/* Sync message banner */}
      {state.showSyncMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-white text-azure px-6 py-3 rounded-lg shadow-lg border border-azure flex items-center gap-3">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Saved! Syncing... Page will refresh in ~10 seconds.</span>
        </div>
      )}

      {/* Content - clickable with blue outline on hover */}
      <div
        onClick={openEditor}
        className="cursor-pointer hover:outline hover:outline-2 hover:outline-azure hover:outline-offset-2 rounded transition-all"
      >
        {children}
      </div>

      {/* Edit Modal */}
      {state.isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={closeEditor} />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Edit Content</h2>

            {state.isLoading ? (
              <div className="flex items-center justify-center py-12">
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="ml-3 text-gray-600">Loading...</span>
              </div>
            ) : parsedMenu ? (
              // Menu editor UI
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Menu Header</label>
                  <input
                    type="text"
                    value={parsedMenu.header}
                    onChange={(e) => updateMenuHeader(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    disabled={state.isSaving}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Menu Items</label>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto">
                    {parsedMenu.items.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center p-2 bg-gray-50 rounded-lg">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateMenuItem(index, 'title', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                          placeholder="Dish name"
                          disabled={state.isSaving}
                        />
                        <input
                          type="text"
                          value={item.price}
                          onChange={(e) => updateMenuItem(index, 'price', e.target.value)}
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
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Item
                  </button>
                </div>
              </div>
            ) : parsedList ? (
              // List editor UI (for opening hours, etc.)
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={parsedList.title}
                    onChange={(e) => updateListTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    disabled={state.isSaving}
                    placeholder="Title (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Items</label>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto">
                    {parsedList.items.map((item, index) => (
                      <div key={index} className="flex gap-2 items-center p-2 bg-gray-50 rounded-lg">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => updateListItem(index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm"
                          disabled={state.isSaving}
                        />
                        <button
                          onClick={() => removeListItem(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                          disabled={state.isSaving}
                          title="Remove item"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={addListItem}
                    className="mt-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-1"
                    disabled={state.isSaving}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Item
                  </button>
                </div>
              </div>
            ) : (
              // Fallback textarea for other content
              <textarea
                value={state.html}
                onChange={(e) => setState(prev => ({ ...prev, html: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px] text-gray-900 font-mono text-sm"
                placeholder="Enter HTML content..."
                disabled={state.isSaving}
              />
            )}

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
                className="px-6 py-3 bg-azure text-vulcan rounded-lg font-bold hover:bg-azure/90 disabled:opacity-50 flex items-center gap-2"
              >
                {state.isSaving ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  'Save & Publish'
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
