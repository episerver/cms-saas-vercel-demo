'use client'

import { useState, useCallback } from 'react'
import { useAuth } from './AuthContext'
import { useRouter } from 'next/navigation'

type EditableHeroProps = {
  contentKey: string
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

export function EditableHero({
  contentKey,
  initialHeading,
  initialDescription,
  locale = 'en',
  children,
}: EditableHeroProps) {
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

  const saveChanges = useCallback(async () => {
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

      const data = await res.json()

      if (data.success) {
        setState(prev => ({ ...prev, isEditing: false, isSaving: false }))
        // Refresh the page to show updated content
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

  // If not authenticated, just render children as-is
  if (!isAuthenticated) {
    return <>{children}</>
  }

  // Authenticated: show edit controls
  return (
    <div className="relative group">
      {/* Edit overlay button */}
      {!state.isEditing && (
        <button
          onClick={startEditing}
          className="absolute top-2 right-2 z-10 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-blue-700"
        >
          Edit Hero
        </button>
      )}

      {state.isEditing ? (
        <div className="relative">
          {/* Editing UI */}
          <div className="border-2 border-blue-500 rounded-lg p-6 bg-white/95 backdrop-blur">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading
              </label>
              <input
                type="text"
                value={state.heading}
                onChange={e => setState(prev => ({ ...prev, heading: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-2xl font-bold"
                disabled={state.isSaving}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={state.description}
                onChange={e => setState(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                disabled={state.isSaving}
              />
            </div>

            {state.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                {state.error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={saveChanges}
                disabled={state.isSaving}
                className="px-4 py-2 bg-azure text-vulcan rounded-md font-medium hover:bg-azure/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.isSaving ? 'Saving...' : 'Save & Publish'}
              </button>
              <button
                onClick={cancelEditing}
                disabled={state.isSaving}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  )
}
