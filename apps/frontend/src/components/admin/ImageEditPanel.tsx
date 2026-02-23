'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useAuth } from './AuthContext'

type CmsImage = {
  key: string
  name: string
  url: string | null
  cmsRef: string
}

type ImageEditPanelState = {
  isOpen: boolean
  contentKey: string | null
  isLoading: boolean
  images: CmsImage[]
  isSaving: boolean
  error: string | null
  showSyncMessage: boolean
}

// Global state for the image edit panel
let globalSetState: ((state: Partial<ImageEditPanelState>) => void) | null = null
let globalState: ImageEditPanelState = {
  isOpen: false,
  contentKey: null,
  isLoading: false,
  images: [],
  isSaving: false,
  error: null,
  showSyncMessage: false,
}

// Function to open the image editor from anywhere
export function openImageEditor(contentKey: string) {
  if (globalSetState) {
    globalSetState({ isOpen: true, contentKey, isLoading: true, error: null })
    // Fetch images
    fetch('/api/cms/images')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load images (${res.status})`)
        }
        return res.json()
      })
      .then(data => {
        if (globalSetState) {
          globalSetState({
            isLoading: false,
            images: data.success ? (data.images || []) : [],
          })
        }
      })
      .catch(err => {
        if (globalSetState) {
          globalSetState({
            isLoading: false,
            error: err instanceof Error ? err.message : 'Failed to load images',
          })
        }
      })
  }
}

/**
 * Floating panel for editing images.
 * Renders at a fixed position and doesn't affect page layout.
 * Should be included once in the app (in AdminWrapper).
 */
export function ImageEditPanel() {
  const { isAuthenticated } = useAuth()
  const [state, setState] = useState<ImageEditPanelState>(globalState)
  const [mounted, setMounted] = useState(false)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Clean up pending reload timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  // Register global state setter
  useEffect(() => {
    setMounted(true)
    globalSetState = (partial) => {
      setState(prev => {
        const newState = { ...prev, ...partial }
        globalState = newState
        return newState
      })
    }
    return () => {
      globalSetState = null
    }
  }, [])

  const closePanel = useCallback(() => {
    if (globalSetState) {
      globalSetState({ isOpen: false, error: null })
    } else {
      setState(prev => ({ ...prev, isOpen: false, error: null }))
    }
  }, [])

  const selectImage = useCallback(async (cmsRef: string) => {
    if (!state.contentKey) return

    setState(prev => ({ ...prev, isSaving: true, error: null }))

    try {
      const res = await fetch('/api/cms/content/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contentKey: state.contentKey,
          fieldName: 'imageLink',
          value: cmsRef,
          locale: 'en',
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
      timeoutIdRef.current = setTimeout(async () => {
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
  }, [state.contentKey])

  if (!isAuthenticated || !mounted) {
    return null
  }

  const panelContent = (
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

      {/* Floating Panel */}
      {state.isOpen && (
        <>
          <div className="fixed inset-0 bg-vulcan/30 z-[9998]" onClick={closePanel} />
          <div className="fixed bottom-4 right-4 z-[9999] bg-white rounded-xl shadow-2xl p-4 w-96 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-vulcan">Change Image</h3>
              <button onClick={closePanel} className="text-pale-sky hover:text-vulcan">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {state.isLoading ? (
              <div className="flex items-center justify-center py-8">
                <svg className="animate-spin h-6 w-6 text-azure" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="ml-2 text-pale-sky text-sm">Loading...</span>
              </div>
            ) : state.images.length === 0 ? (
              <div className="text-center py-8 text-pale-sky text-sm">
                No images found
              </div>
            ) : (
              <div className="overflow-y-auto flex-1">
                <div className="grid grid-cols-3 gap-2">
                  {state.images.map((image) => (
                    <button
                      key={image.key}
                      onClick={() => selectImage(image.cmsRef)}
                      disabled={state.isSaving}
                      className="group relative aspect-square border border-mischka rounded-lg overflow-hidden hover:border-azure hover:ring-2 hover:ring-azure transition-all disabled:opacity-50"
                    >
                      {image.url ? (
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-ghost-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pale-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      {/* Hover overlay with name */}
                      <div className="absolute inset-0 bg-vulcan/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-1">
                        <span className="text-xs text-white truncate w-full">{image.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.error && (
              <div className="mt-3 p-2 bg-paleruby/10 border border-paleruby rounded-lg text-paleruby text-xs">
                {state.error}
              </div>
            )}

            {state.isSaving && (
              <div className="mt-3 flex items-center justify-center text-azure text-sm">
                <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </div>
            )}
          </div>
        </>
      )}
    </>
  )

  // Use portal to render outside the normal DOM hierarchy
  return mounted ? createPortal(panelContent, document.body) : null
}
