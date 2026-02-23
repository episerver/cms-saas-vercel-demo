'use client'

import { useState } from 'react'
import { useAuth } from '@/components/admin/AuthContext'
import { openImageEditor } from '@/components/admin/ImageEditPanel'

type EditableImageProps = {
  contentKey: string | null
  children: React.ReactNode
}

/**
 * Client component wrapper that makes images clickable for editing.
 * Shows a "Change" button on hover, positioned absolutely within the wrapper.
 */
export function EditableImage({ contentKey, children }: EditableImageProps) {
  const { isAuthenticated } = useAuth()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (contentKey) {
      openImageEditor(contentKey)
    }
  }

  // If not authenticated, just render children without any wrapper
  if (!isAuthenticated || !contentKey) {
    return <>{children}</>
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <button
          onClick={handleClick}
          className="absolute top-2 right-2 z-[100] bg-vulcan text-white px-3 py-1.5 rounded-lg shadow-lg hover:bg-vulcan-85 flex items-center gap-1.5 text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Change
        </button>
      )}
    </div>
  )
}
