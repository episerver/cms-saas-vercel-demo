'use client'

import { type FunctionComponent } from 'react';
import useTheme from '@/components/theme';
import { SunIcon, MoonIcon, ComputerDesktopIcon  } from '@heroicons/react/24/solid';
import useFlag from '@/useFlag';
import { layout_configuration } from "@/flags";

export const ThemePicker :  FunctionComponent = () =>
{
    const { theme_switcher: switcherEnabled } = useFlag(layout_configuration, { logo: "", theme_switcher: true })
    const { effectiveTheme, theme, setTheme } = useTheme()
    if (!switcherEnabled)
        return null
    
    const toggleTheme = () => {
        setTheme(x => x == "dark" ? "light" : (x == "light" ? "system": "dark"));
    }

    let title = ""
    switch (theme) {
        case 'system':
            title = "Follow system preference"
            break;
        case 'dark':
            title = "Always use dark mode"
            break;
        case 'light':
            title = "Always use light mode"
            break;
    }

    return <button onClick={ toggleTheme } className={`theme-switcher block h-full aspect-[3/2]`} title={ title + ", click to switch mode" }>
        <div className={`rounded-full border-2 border-solid ${ effectiveTheme == 'light'? 'bg-white dark:border-vulcan-85' : 'bg-vulcan-85 dark:border-ghost-white'} w-full h-full min-h-11 shadow-inner`}>
            { theme == 'dark' && <MoonIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-auto h-full p-2 mr-auto`} /> }
            { theme == 'light' && <SunIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-auto h-full p-2 mx-auto`} /> }
            { theme == 'system' && <ComputerDesktopIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-auto h-full p-2 ml-auto`} /> }
        </div>
    </button>
}

export default ThemePicker