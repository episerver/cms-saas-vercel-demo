'use client'
import { useState, useMemo, type FunctionComponent, type PropsWithChildren, useCallback } from "react";
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';

export type ConfirmDialogProps = PropsWithChildren<{ 
    isOpen: boolean, 
    cancel: ()=>void, 
    confirm: ()=>void,
    title: string, 
    text: string 
}>
type DialogState = Pick<ConfirmDialogProps, 'title'|'text'|'children'> & { code?: string, isOpen: boolean }

export function useConfirmDialog(onConfirmed: (state: Omit<DialogState, 'isOpen' | 'text' | 'children'>)=>void, onCancelled?: ()=>void) : [ ConfirmDialogProps, (options: Omit<DialogState, 'isOpen'>)=>void ]
{
    const [ dialogState, setDialogState ] = useState<DialogState>({ title: "", text: "", isOpen: false})
    const dialogProps = useMemo<ConfirmDialogProps>(() => {
        return {
            title: dialogState.title,
            text: dialogState.text,
            isOpen: dialogState.isOpen,
            cancel: () => {
                setDialogState(cur => { return { ...cur, isOpen: false }})
                if (onCancelled) 
                     onCancelled()
            },
            confirm: () => {
                setDialogState(cur => { return { ...cur, isOpen: false }})
                onConfirmed({ title: dialogState.title, code: dialogState.code })
            }
        }
    }, [ dialogState, onCancelled, onConfirmed ])
    const showDialog = useCallback((options: Omit<DialogState,'isOpen'>) => setDialogState({ ...options, isOpen: true }), [])
    return [ dialogProps, showDialog ]
}

export const ConfirmDialog : FunctionComponent<ConfirmDialogProps> = ({
    isOpen,
    cancel,
    confirm,
    title,
    text,
    children
}) =>
{
    return <Dialog open={isOpen} onClose={() => cancel()} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg w-sm space-y-4 border border-vulcan bg-vulcan-85 text-ghost-white p-4 rounded-lg overflow-hidden shadow-md">
            <DialogTitle className="font-bold bg-vulcan -mx-4 -mt-4 p-4">{ title }</DialogTitle>
            <Description>{text}</Description>
            { children }
            <div className="flex gap-4">
              <button className="cursor-pointer" onClick={() => confirm()}>Ok</button>
              <button className="cursor-pointer" onClick={() => cancel()}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
}