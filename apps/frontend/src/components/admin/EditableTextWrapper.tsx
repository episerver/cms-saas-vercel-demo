'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { useRouter } from 'next/navigation'

type EditableTextWrapperProps = {
  contentKey: string | null
  initialValue: string
  fieldName: string
  locale?: string
  children: React.ReactNode
  className?: string
  multiline?: boolean // Use textarea for multi-line content (paragraphs)
}

type EditState = {
  isEditing: boolean
  value: string
  isSaving: boolean
  error: string | null
}

type TextStyles = {
  fontSize: string
  fontFamily: string
  fontWeight: string
  fontStyle: string
  letterSpacing: string
  textTransform: string
  lineHeight: string
  color: string
  width: string
  height: string
}

/**
 * Inline text editing wrapper.
 * Shows an editable input field overlaid on the text when clicked (for authenticated users).
 * Uses input field approach to avoid React DOM reconciliation conflicts with contentEditable.
 * Dynamically captures the child element's styles so the input matches exactly.
 */
export function EditableTextWrapper({
  contentKey,
  initialValue,
  fieldName,
  locale = 'en',
  children,
  multiline = false,
}: EditableTextWrapperProps) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  const childRef = useRef<HTMLDivElement>(null)
  const isCancelledRef = useRef(false)

  const [state, setState] = useState<EditState>({
    isEditing: false,
    value: initialValue,
    isSaving: false,
    error: null,
  })

  // Sync state.value with initialValue when it changes (e.g., after page refresh)
  useEffect(() => {
    if (!state.isEditing && !state.isSaving) {
      setState(prev => ({ ...prev, value: initialValue }))
    }
  }, [initialValue, state.isEditing, state.isSaving])

  const [textStyles, setTextStyles] = useState<TextStyles | null>(null)

  // Capture styles from the child element when starting to edit
  const captureStyles = useCallback(() => {
    if (childRef.current) {
      // Find the first text-containing element (h1, h2, p, span, etc.)
      const textElement = childRef.current.querySelector('h1, h2, h3, h4, h5, h6, p, span, div') as HTMLElement
      const targetElement = textElement || childRef.current

      const computed = window.getComputedStyle(targetElement)
      const rect = targetElement.getBoundingClientRect()
      setTextStyles({
        fontSize: computed.fontSize,
        fontFamily: computed.fontFamily,
        fontWeight: computed.fontWeight,
        fontStyle: computed.fontStyle,
        letterSpacing: computed.letterSpacing,
        textTransform: computed.textTransform,
        lineHeight: computed.lineHeight,
        color: computed.color,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      })
    }
  }, [])

  // Focus the input when editing starts and auto-resize textarea
  useEffect(() => {
    if (state.isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()

      // Auto-resize textarea to fit content
      if (multiline && inputRef.current instanceof HTMLTextAreaElement) {
        const textarea = inputRef.current
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }
  }, [state.isEditing, multiline])

  // Auto-resize textarea when content changes
  useEffect(() => {
    if (state.isEditing && multiline && inputRef.current instanceof HTMLTextAreaElement) {
      const textarea = inputRef.current
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [state.value, state.isEditing, multiline])

  const startEditing = useCallback(() => {
    if (!contentKey) return
    console.log('EditableTextWrapper - contentKey:', contentKey)
    console.log('EditableTextWrapper - fieldName:', fieldName)
    console.log('EditableTextWrapper - initialValue:', initialValue)
    isCancelledRef.current = false
    captureStyles()
    setState(prev => ({ ...prev, isEditing: true, error: null }))
  }, [contentKey, fieldName, initialValue, captureStyles])

  const cancelEditing = useCallback(() => {
    isCancelledRef.current = true
    setState(prev => ({
      ...prev,
      isEditing: false,
      value: initialValue,
      error: null,
    }))
  }, [initialValue])

  const saveChanges = useCallback(async () => {
    if (!contentKey) return

    // Don't save if value hasn't changed
    if (state.value === initialValue) {
      setState(prev => ({ ...prev, isEditing: false }))
      return
    }

    console.log('Saving changes...', { contentKey, fieldName, value: state.value })
    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey,
          fieldName,
          value: state.value,
          locale,
        }),
      })

      const data = await res.json()
      console.log('Save response:', data)

      if (data.success) {
        setState(prev => ({ ...prev, isEditing: false, isSaving: false }))
        // Wait for CMS to sync with Optimizely Graph, then do a hard page reload
        // The Graph sync can take a few seconds
        setTimeout(() => {
          // Add cache-busting parameter to force fresh data
          const url = new URL(window.location.href)
          url.searchParams.set('_t', Date.now().toString())
          window.location.href = url.toString()
        }, 5000)
      } else {
        console.error('Save failed:', data.error)
        setState(prev => ({ ...prev, isSaving: false, error: data.error || 'Failed to save' }))
      }
    } catch (err) {
      console.error('Save error:', err)
      setState(prev => ({
        ...prev,
        isSaving: false,
        error: err instanceof Error ? err.message : 'Failed to save',
      }))
    }
  }, [contentKey, fieldName, state.value, initialValue, locale, router])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    // For multiline (textarea), Shift+Enter or Cmd/Ctrl+Enter saves
    // For single line (input), Enter saves
    if (multiline) {
      if ((e.key === 'Enter' && (e.metaKey || e.ctrlKey)) || (e.key === 'Enter' && e.shiftKey)) {
        e.preventDefault()
        saveChanges()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        cancelEditing()
      }
    } else {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        saveChanges()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        cancelEditing()
      }
    }
  }, [saveChanges, cancelEditing, multiline])

  // Save on blur (click outside) - only if not already saving or cancelled
  const handleBlur = useCallback(() => {
    // Small delay to allow Escape key to cancel first
    setTimeout(() => {
      if (!isCancelledRef.current && state.isEditing && !state.isSaving) {
        saveChanges()
      }
    }, 150)
  }, [state.isEditing, state.isSaving, saveChanges])

  // Show saving overlay for better UX
  const [showSavingOverlay, setShowSavingOverlay] = useState(false)

  // Keep overlay visible during save and for 10 seconds after
  useEffect(() => {
    if (state.isSaving) {
      setShowSavingOverlay(true)
    } else if (showSavingOverlay && !state.isSaving && !state.error) {
      // Keep showing for 10 seconds after save completes
      const timer = setTimeout(() => setShowSavingOverlay(false), 10000)
      return () => clearTimeout(timer)
    }
  }, [state.isSaving, state.error, showSavingOverlay])

  // If not authenticated or no content key, just render children
  if (!isAuthenticated || !contentKey) {
    return <>{children}</>
  }

  return (
    <>
      {/* Saving banner - shown globally, outside the editing container */}
      {showSavingOverlay && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-azure text-vulcan rounded-lg shadow-xl flex items-center gap-3">
          {state.isSaving ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="font-medium">Saving changes...</span>
            </>
          ) : (
            <>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Saved! Syncing with CMS...</span>
            </>
          )}
        </div>
      )}

      {/* Error message - shown globally */}
      {state.error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-red-100 border border-red-300 text-red-700 rounded-lg shadow-xl">
          <span className="font-medium">Error: {state.error}</span>
        </div>
      )}

      <div ref={containerRef} className="relative group">
        {/* Show edit indicator on hover when not editing */}
        {!state.isEditing && (
          <div
            ref={childRef}
            onClick={startEditing}
            className="cursor-pointer hover:outline hover:outline-2 hover:outline-azure hover:outline-offset-2 rounded transition-all"
          >
            {children}
          </div>
        )}

        {/* Editing mode: show input/textarea field overlay */}
        {state.isEditing && (
          <div className="relative">
            {multiline ? (
              /* Textarea for multi-line content (paragraphs) */
              <textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={state.value}
                onChange={e => setState(prev => ({ ...prev, value: e.target.value }))}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                disabled={state.isSaving}
                className="bg-transparent outline outline-2 outline-azure outline-offset-2 rounded px-1 resize-none overflow-hidden"
                style={textStyles ? {
                  fontSize: textStyles.fontSize,
                  fontFamily: textStyles.fontFamily,
                  fontWeight: textStyles.fontWeight,
                  fontStyle: textStyles.fontStyle,
                  letterSpacing: textStyles.letterSpacing,
                  textTransform: textStyles.textTransform as React.CSSProperties['textTransform'],
                  lineHeight: textStyles.lineHeight,
                  color: textStyles.color,
                  width: textStyles.width,
                  minHeight: textStyles.height,
                } : {}}
              />
            ) : (
              /* Input field for single-line content (headings) */
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type="text"
                value={state.value}
                onChange={e => setState(prev => ({ ...prev, value: e.target.value }))}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                disabled={state.isSaving}
                className="bg-transparent outline outline-2 outline-azure outline-offset-2 rounded px-1"
                style={textStyles ? {
                  fontSize: textStyles.fontSize,
                  fontFamily: textStyles.fontFamily,
                  fontWeight: textStyles.fontWeight,
                  fontStyle: textStyles.fontStyle,
                  letterSpacing: textStyles.letterSpacing,
                  textTransform: textStyles.textTransform as React.CSSProperties['textTransform'],
                  lineHeight: textStyles.lineHeight,
                  color: textStyles.color,
                  minWidth: textStyles.width,
                  width: 'auto',
                } : {}}
              />
            )}
          </div>
        )}
      </div>
    </>
  )
}
