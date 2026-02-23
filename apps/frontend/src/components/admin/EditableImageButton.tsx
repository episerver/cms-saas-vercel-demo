'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useAuth } from './AuthContext'

type CmsImage = {
  key: string
  name: string
  cmsRef: string
}

type EditableImageButtonProps = {
  contentKey: string | null
  fieldName: string
  locale?: string
  children: React.ReactNode
}

type EditState = {
  isOpen: boolean
  currentValue: string
  images: CmsImage[]
  isLoading: boolean
  isSaving: boolean
  error: string | null
  showSyncMessage: boolean
}

/**
 * Wrapper that adds an edit button for image content.
 * When clicked, opens a modal to select a new image from the CMS.
 */
export function EditableImageButton({
  contentKey,
  fieldName,
  locale = 'en',
  children,
}: EditableImageButtonProps) {
  const { isAuthenticated } = useAuth()
  const refreshTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current)
      }
    }
  }, [])

  const [state, setState] = useState<EditState>({
    isOpen: false,
    currentValue: '',
    images: [],
    isLoading: false,
    isSaving: false,
    error: null,
    showSyncMessage: false,
  })

  const openEditor = useCallback(async () => {
    if (!contentKey) return

    setState(prev => ({ ...prev, isOpen: true, isLoading: true, error: null }))

    try {
      // Fetch current value and available images in parallel
      const params = new URLSearchParams({
        contentKey,
        fieldName,
        locale,
      })
      const [valueRes, imagesRes] = await Promise.all([
        fetch(`/api/cms/content/get?${params.toString()}`),
        fetch('/api/cms/images'),
      ])

      if (!valueRes.ok) {
        throw new Error(`Failed to fetch content value: ${valueRes.status} ${valueRes.statusText}`)
      }
      if (!imagesRes.ok) {
        throw new Error(`Failed to fetch images: ${imagesRes.status} ${imagesRes.statusText}`)
      }

      const valueData = await valueRes.json()
      const imagesData = await imagesRes.json()

      setState(prev => ({
        ...prev,
        isLoading: false,
        currentValue: valueData.success ? (valueData.value?.cmsRef || valueData.value?.url || valueData.value || '') : '',
        images: imagesData.success ? (imagesData.images || []) : [],
      }))
    } catch (err) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : 'Failed to load',
      }))
    }
  }, [contentKey, fieldName, locale])

  const closeEditor = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false, error: null }))
  }, [])

  const selectImage = useCallback(async (cmsRef: string) => {
    if (!contentKey) return

    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey,
          fieldName,
          value: cmsRef,
          locale,
        }),
      })

      if (!res.ok) {
        const body = await res.text()
        throw new Error(`Failed to save: ${res.status} ${res.statusText} - ${body}`)
      }

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
      if (refreshTimeoutRef.current) {
        clearTimeout(refreshTimeoutRef.current)
      }
      refreshTimeoutRef.current = setTimeout(async () => {
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
  }, [contentKey, fieldName, locale])

  // If not authenticated or no content key, just render children as-is
  if (!isAuthenticated || !contentKey) {
    return <>{children}</>
  }

  // Wrapper with relative positioning to contain the absolute button
  return (
    <div className="relative w-full h-full group">
      {/* Sync message banner - rendered at fixed position */}
      {state.showSyncMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-white text-azure px-6 py-3 rounded-lg shadow-lg border border-azure flex items-center gap-3">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Saved! Syncing... Page will refresh in ~10 seconds.</span>
        </div>
      )}

      {/* Edit button - stays in place when scrolling */}
      {!state.showSyncMessage && (
        <button
          onClick={openEditor}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-vulcan text-white px-3 py-1.5 rounded-lg shadow-lg hover:bg-vulcan-85 flex items-center gap-1.5 text-sm font-medium"
          title="Change image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Change
        </button>
      )}

      {/* Content */}
      {children}

      {/* Image Picker Modal */}
      {state.isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={closeEditor} />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Choose Image</h2>
              <button onClick={closeEditor} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {state.isLoading ? (
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
                    const isSelected = state.currentValue === image.cmsRef

                    return (
                      <button
                        key={image.key}
                        onClick={() => selectImage(image.cmsRef)}
                        disabled={state.isSaving}
                        className={`p-3 border-2 rounded-lg text-left hover:border-blue-500 transition-colors disabled:opacity-50 ${
                          isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-700 truncate">{image.name}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {state.error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                <strong>Error:</strong> {state.error}
              </div>
            )}

            {state.isSaving && (
              <div className="mt-4 flex items-center justify-center text-blue-600">
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
