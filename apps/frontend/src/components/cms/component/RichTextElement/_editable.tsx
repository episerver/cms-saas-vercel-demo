'use client'

import { EditableRichTextButton } from '@/components/admin'

type EditableRichTextProps = {
  contentKey: string | null
  children: React.ReactNode
}

/**
 * Client component wrapper that adds an edit button to rich text content.
 * When clicked, opens a modal to edit the menu/content.
 */
export function EditableRichText({ contentKey, children }: EditableRichTextProps) {
  return (
    <EditableRichTextButton
      contentKey={contentKey}
      fieldName="text"
    >
      {children}
    </EditableRichTextButton>
  )
}
