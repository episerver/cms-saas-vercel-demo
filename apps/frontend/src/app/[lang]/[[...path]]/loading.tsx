import React from 'react'

export function Loading() 
{
    return <div className='max-w-screen-2xl mx-auto grid gap-y-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 blur'>
        <div className='md:col-span-2 lg:col-span-4 h-48 w-full bg-slate-200 animate-pulse'></div>
        <div className='h-56 w-full bg-slate-200 animate-pulse'></div>
        <div className='h-56 w-full bg-slate-200 animate-pulse'></div>
        <div className='h-56 w-full bg-slate-200 animate-pulse'></div>
        <div className='h-56 w-full bg-slate-200 animate-pulse'></div>
        <div className='h-44 w-full bg-slate-200 md:col-span-1 lg:col-span-2 animate-pulse'></div>
        <div className='h-44 w-full bg-slate-200 md:col-span-1 lg:col-span-2 animate-pulse'></div>
    </div>
}

export default Loading