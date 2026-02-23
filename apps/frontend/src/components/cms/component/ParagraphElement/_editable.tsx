'use client'

import { EditableTextWrapper } from '@/components/admin'

type EditableParagraphProps = {
  contentKey: string | null
  textContent: string
  children: React.ReactNode
}

/**
 * Client component wrapper that adds inline edit functionality to paragraph content.
 */
export function EditableParagraph({ contentKey, textContent, children }: EditableParagraphProps) {
  return (
    <EditableTextWrapper
      contentKey={contentKey}
      initialValue={textContent}
      fieldName="text"
      multiline={true}
    >
      {children}
    </EditableTextWrapper>
  )
}
