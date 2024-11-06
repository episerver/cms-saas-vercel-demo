'use client'
import { useLayoutEffect, useState, useEffect } from "react";

type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

function sizeToBreakpoint(width: number) : BreakPoints
{
    if (width <= 640) return 'xs'
    if (width <= 768) return 'sm'
    if (width <= 1024) return 'md'
    if (width <= 1280) return 'lg'
    if (width <= 1536) return 'xl'
    return '2xl'
}

export function useBreakpoint()
{
    const [ innerWidth, setInnerWidth ] = useState<number>(0)
    const [ breakPoint, setBreakPoint ] = useState<BreakPoints>('xs')
    useLayoutEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])
    useEffect(() => {
        const onResize = () => {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    })
    useEffect(() => {
        setBreakPoint(sizeToBreakpoint(innerWidth))
    }, [innerWidth])

    return [ innerWidth, breakPoint ]
}

export default useBreakpoint