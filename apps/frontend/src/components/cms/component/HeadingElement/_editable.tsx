'use client'

import { EditableTextWrapper } from '@/components/admin'

type EditableHeadingProps = {
  contentKey: string | null
  headingText: string
  children: React.ReactNode
}

/**
 * Client component wrapper that adds inline edit functionality to headings.
 */
export function EditableHeading({ contentKey, headingText, children }: EditableHeadingProps) {
  return (
    <EditableTextWrapper
      contentKey={contentKey}
      initialValue={headingText}
      fieldName="headingText"
    >
      {children}
    </EditableTextWrapper>
  )
}
