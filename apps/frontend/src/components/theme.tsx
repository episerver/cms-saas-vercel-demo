'use client'
import { createContext, useContext, useState, useMemo, useEffect, useLayoutEffect, type FunctionComponent, type PropsWithChildren } from 'react'

export type ThemeContextData = {
    theme: "light" | "dark" | "system",
    effectiveTheme: "light" | "dark",
    setTheme: ReturnType<typeof useState<ThemeContextData['theme']>>[1]
}
export type ThemeContentInitialData = Pick<ThemeContextData, 'theme'>

export const ThemeContext = createContext<ThemeContextData>({
    theme: "system",
    effectiveTheme: "light",
    setTheme: ()=> { throw new Error("No Context defined")}
})
ThemeContext.displayName = "Color theme provider"
export const useTheme = () => useContext(ThemeContext)
export const ThemeProvider: FunctionComponent<PropsWithChildren<{ value: ThemeContentInitialData }>> = ({ value: { theme }, children }) => {
    const [ themeState, setThemeState ] = useState<ThemeContextData['theme']>(theme) as [ThemeContextData['theme'], ThemeContextData['setTheme']]
    const [ sysTheme, setSysTheme ] = useState<'light' | 'dark'>('light')

    // Initial load of theme
    useLayoutEffect(() => {
        const storedState = localStorage.getItem('color-theme')
        if (typeof(storedState) == 'string' && ['light','dark','system'].includes(storedState))
            setThemeState(storedState as 'light' | 'dark' | 'system')

        const query = window.matchMedia('(prefers-color-scheme: dark)')
        function onPreferColorSchemeChange(e: MediaQueryListEvent) {
            setSysTheme(e.matches ? 'dark' : 'light')
        }
        query.addEventListener("change", onPreferColorSchemeChange)

        return () => {
            query.removeEventListener("change", onPreferColorSchemeChange)
        }
    },[])

    // Update local storage if needed
    useEffect(() => {
        if (localStorage.getItem('color-theme') != themeState)
            localStorage.setItem('color-theme', themeState)
    }, [ themeState ])

    return <ThemeContext.Provider value={{
        theme: themeState,
        effectiveTheme: themeState == 'system' ? sysTheme : themeState,
        setTheme: setThemeState
    }}>{ children }</ThemeContext.Provider>
}

export const Body: FunctionComponent<JSX.IntrinsicElements['body']> = ({ className, children, ...props }) => {
    const { effectiveTheme } = useTheme()
    const themeClass = effectiveTheme == 'dark' ? 'dark' : ''
    return <body className={`${ themeClass } ${ className }`.trim()} {...props}>{ children }</body>
}

export default useTheme