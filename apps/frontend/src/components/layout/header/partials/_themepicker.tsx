'use client'

import { type FunctionComponent } from 'react';
import useTheme from '@/components/theme';
import { SunIcon, MoonIcon, ComputerDesktopIcon  } from '@heroicons/react/24/solid';

export const ThemePicker :  FunctionComponent = () =>
{
    const { effectiveTheme, theme, setTheme } = useTheme()
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

    return <button onClick={ toggleTheme } className={`theme-switcher inline-block align-middle`} title={ title + ", click to switch mode" }>
        <div className={`btn__content min-w-[80px] ${ effectiveTheme == 'light'? 'bg-white' : 'bg-vulcan-85'} h-[48px]`}>
            { theme == 'dark' && <MoonIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-[44px] h-[44px] p-[10px] mr-auto -ml-[16px] -my-[10px]`} /> }
            { theme == 'light' && <SunIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-[44px] h-[44px] p-[10px] mx-auto -my-[10px]`} /> }
            { theme == 'system' && <ComputerDesktopIcon className={`block ${ effectiveTheme == 'light'? 'text-vulcan bg-ghost-white shadow-sm' : 'text-white bg-vulcan'} rounded-full w-[44px] h-[44px] p-[10px] ml-auto -mr-[16px] -my-[10px]`} /> }
        </div>
    </button>
}

export default ThemePicker