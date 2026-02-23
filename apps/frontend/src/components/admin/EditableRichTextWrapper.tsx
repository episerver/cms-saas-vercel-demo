'use client'

import { useState, useCallback, useMemo } from 'react'
import DOMPurify from 'dompurify'
import { useAuth } from './AuthContext'

// Only show edit buttons for these specific content keys
const ALLOWED_CONTENT_KEYS = [
  'fd572f3f-b502-4a66-8c5b-5e7a45f4f1b4', // Rich text content
]

type EditableRichTextWrapperProps = {
  contentKey: string | null
  initialHtml: string
  fieldName: string
  locale?: string
  children: React.ReactNode
}

type EditState = {
  isEditing: boolean
  html: string
  isSaving: boolean
  error: string | null
  showSyncMessage: boolean
}

export function EditableRichTextWrapper({
  contentKey,
  initialHtml,
  fieldName,
  locale = 'en',
  children,
}: EditableRichTextWrapperProps) {
  const { isAuthenticated } = useAuth()

  // Check if this content key is in the allowed list
  const isAllowedContent = contentKey && ALLOWED_CONTENT_KEYS.includes(contentKey)

  const [state, setState] = useState<EditState>({
    isEditing: false,
    html: initialHtml,
    isSaving: false,
    error: null,
    showSyncMessage: false,
  })

  const startEditing = useCallback(() => {
    setState(prev => ({ ...prev, isEditing: true, error: null }))
  }, [])

  const cancelEditing = useCallback(() => {
    setState(prev => ({
      ...prev,
      isEditing: false,
      html: initialHtml,
      error: null,
    }))
  }, [initialHtml])

  const saveChanges = useCallback(async () => {
    if (!contentKey) {
      setState(prev => ({ ...prev, error: 'No content key available' }))
      return
    }

    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey,
          fieldName,
          value: DOMPurify.sanitize(state.html),
          locale,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setState(prev => ({ ...prev, isEditing: false, isSaving: false, showSyncMessage: true }))
        setTimeout(() => {
          window.location.reload()
        }, 5000)
      } else {
        setState(prev => ({ ...prev, isSaving: false, error: data.error || 'Failed to save' }))
      }
    } catch (err) {
      setState(prev => ({
        ...prev,
        isSaving: false,
        error: err instanceof Error ? err.message : 'Failed to save',
      }))
    }
  }, [contentKey, fieldName, state.html, locale])

  const sanitizedHtml = useMemo(() => DOMPurify.sanitize(state.html), [state.html])

  // If not authenticated, no content key, or not in allowed list, just render children as-is
  if (!isAuthenticated || !contentKey || !isAllowedContent) {
    return <>{children}</>
  }

  // Authenticated: show edit controls
  return (
    <div className="relative group">
      {/* Sync message banner */}
      {state.showSyncMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg border border-blue-600 flex items-center gap-3">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Saved! Syncing with content delivery... Page will refresh shortly.</span>
        </div>
      )}

      {/* Edit overlay button */}
      {!state.isEditing && !state.showSyncMessage && (
        <button
          onClick={startEditing}
          className="absolute top-0 right-0 z-[9999] bg-white text-blue-600 px-2 py-1 rounded text-xs font-medium shadow-lg hover:bg-gray-100 border border-blue-600 flex items-center gap-1"
          title="Edit this text"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </button>
      )}

      {state.isEditing ? (
        <div className="relative">
          {/* Editing Modal Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={cancelEditing} />

          {/* Editing Form */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Edit Rich Text</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                HTML Content
              </label>
              <textarea
                value={state.html}
                onChange={e => setState(prev => ({ ...prev, html: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px] text-gray-900 font-mono text-sm"
                placeholder="Enter HTML..."
                disabled={state.isSaving}
              />
              <p className="mt-2 text-xs text-gray-500">
                Tip: Use HTML tags like &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;, &lt;li&gt;
              </p>
            </div>

            {/* Preview */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview
              </label>
              <div
                className="p-4 border border-gray-200 rounded-lg bg-gray-50 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </div>

            {state.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <strong>Error:</strong> {state.error}
              </div>
            )}

            <div className="flex gap-4 justify-end mt-6">
              <button
                onClick={cancelEditing}
                disabled={state.isSaving}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold text-base hover:bg-gray-300 disabled:opacity-50 transition-colors border-2 border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                disabled={state.isSaving}
                className="px-8 py-3 bg-azure text-vulcan rounded-lg font-bold text-lg hover:bg-azure/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-3 shadow-lg hover:shadow-xl border-2 border-azure transform hover:scale-105"
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
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SAVE & PUBLISH
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Show children in background (dimmed) */}
          <div className="opacity-50 pointer-events-none">
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}
