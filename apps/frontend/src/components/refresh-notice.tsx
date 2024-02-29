'use client'
import  React, { type FunctionComponent } from 'react'
import { Dialog } from '@headlessui/react'

export type RefreshNoticeProps = {
    title?: string
    message?: string
}

export const RefreshNotice : FunctionComponent<RefreshNoticeProps> = ({ title, message }) => {
    return <Dialog open={ true } onClose={() => {}} className="relative z-50" >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto w-full max-w-sm rounded bg-white shadow-md">
                <Dialog.Title className="p-1 px-3 bg-primary text-default-onPrimary rounded-t font-bold text-lg">{ title ?? "Refreshing content" }</Dialog.Title>
                <Dialog.Description className="p-3 text-base text-slage-800">{ message ?? "Please wait while we update the preview of the content..."}</Dialog.Description>
            </Dialog.Panel>
        </div>
    </Dialog>
}
RefreshNotice.displayName = "Mosey Bank Refresh Notice"

export default RefreshNotice