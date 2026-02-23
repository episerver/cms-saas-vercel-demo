'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useAuth } from './AuthContext'
import { useRouter } from 'next/navigation'

type EditableHeroWrapperProps = {
  contentKey: string | null
  initialHeading: string
  initialDescription: string
  locale?: string
  children: React.ReactNode
}

type EditState = {
  isEditing: boolean
  heading: string
  description: string
  isSaving: boolean
  error: string | null
}

export function EditableHeroWrapper({
  contentKey,
  initialHeading,
  initialDescription,
  locale = 'en',
  children,
}: EditableHeroWrapperProps) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [state, setState] = useState<EditState>({
    isEditing: false,
    heading: initialHeading,
    description: initialDescription,
    isSaving: false,
    error: null,
  })

  const startEditing = useCallback(() => {
    setState(prev => ({ ...prev, isEditing: true, error: null }))
  }, [])

  const cancelEditing = useCallback(() => {
    setState(prev => ({
      ...prev,
      isEditing: false,
      heading: initialHeading,
      description: initialDescription,
      error: null,
    }))
  }, [initialHeading, initialDescription])

  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  // Escape key handler
  useEffect(() => {
    if (!state.isEditing) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !state.isSaving) {
        cancelEditing()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [state.isEditing, state.isSaving, cancelEditing])

  // Focus trap and focus management
  useEffect(() => {
    if (!state.isEditing) return

    previousFocusRef.current = document.activeElement as HTMLElement

    const modal = modalRef.current
    if (!modal) return

    const headingInput = modal.querySelector<HTMLElement>('#hero-heading-input')
    headingInput?.focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = modal.querySelectorAll<HTMLElement>(
        'input:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleTab)
      previousFocusRef.current?.focus()
    }
  }, [state.isEditing])

  const saveChanges = useCallback(async () => {
    if (!contentKey) {
      setState(prev => ({ ...prev, error: 'No content key available' }))
      return
    }

    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/hero/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey,
          heading: state.heading,
          description: state.description,
          locale,
        }),
      })

      if (!res.ok) {
        let message = `Server error (${res.status})`
        try {
          const body = await res.json()
          if (body.error) message = body.error
        } catch {
          const text = await res.text().catch(() => '')
          if (text) message = text
        }
        setState(prev => ({ ...prev, isSaving: false, error: message }))
        return
      }

      const data = await res.json()

      if (data.success) {
        setState(prev => ({ ...prev, isEditing: false, isSaving: false }))
        router.refresh()
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
  }, [contentKey, state.heading, state.description, locale, router])

  // If not authenticated or no content key, just render children as-is
  if (!isAuthenticated || !contentKey) {
    return <>{children}</>
  }

  // Authenticated: show edit controls
  return (
    <div className="relative group">
      {/* Edit overlay button */}
      {!state.isEditing && (
        <button
          onClick={startEditing}
          className="absolute top-4 right-4 z-20 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit Hero
        </button>
      )}

      {state.isEditing ? (
        <div className="relative">
          {/* Editing Modal Overlay */}
          <div className="fixed inset-0 bg-black/50 z-40" onClick={cancelEditing} />

          {/* Editing Form */}
          <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="hero-dialog-title" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl mx-4">
            <h2 id="hero-dialog-title" className="text-2xl font-bold mb-6 text-gray-900">Edit Hero Content</h2>

            <div className="mb-6">
              <label htmlFor="hero-heading-input" className="block text-sm font-medium text-gray-700 mb-2">
                Heading
              </label>
              <input
                id="hero-heading-input"
                type="text"
                value={state.heading}
                onChange={e => setState(prev => ({ ...prev, heading: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-semibold text-gray-900"
                placeholder="Enter heading..."
                disabled={state.isSaving}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="hero-description-input" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="hero-description-input"
                value={state.description}
                onChange={e => setState(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] text-gray-900"
                placeholder="Enter description..."
                disabled={state.isSaving}
              />
              <p className="mt-1 text-sm text-gray-500">You can use HTML for formatting.</p>
            </div>

            {state.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <strong>Error:</strong> {state.error}
              </div>
            )}

            <div className="flex gap-4 justify-end">
              <button
                onClick={cancelEditing}
                disabled={state.isSaving}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                disabled={state.isSaving}
                className="px-6 py-2.5 bg-azure text-vulcan rounded-lg font-medium hover:bg-azure/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {state.isSaving ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
