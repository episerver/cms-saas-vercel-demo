'use client'

import React, { type FunctionComponent } from 'react'
import { useContext, useEffect, useRef, useState } from "react";


export const ThemePicker :  FunctionComponent = () =>
{
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect (() => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.getElementById('theme-toggle-dark-icon')?.classList.remove('hidden');
      document.getElementById('theme-toggle-light-icon')?.classList.add('hidden');
    } else {
      setTheme('light');
    }
    
  }, [])


  useEffect (() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [theme]);

  const handleThemeSwitch = () => {
    // toggle icons inside button
    if (themeToggleDarkIcon) {
      themeToggleDarkIcon.classList.toggle('hidden');
    }
    if (themeToggleLightIcon) {
       themeToggleLightIcon.classList.toggle('hidden');
    }
   

    setTheme(theme === "dark" ? "light" : "dark");

    localStorage.setItem('color-theme', theme === "dark" ? "light" : "dark");
  }

  return (

     <button onClick={handleThemeSwitch} className="mx-10">

        <svg id="theme-toggle-dark-icon" className="hidden" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.76 4.8398L3.96 3.0498L2.55 4.4598L4.34 6.2498L5.76 4.8398ZM3 10.4998H0V12.4998H3V10.4998ZM12 0.549805H10V3.4998H12V0.549805ZM19.45 4.4598L18.04 3.0498L16.25 4.8398L17.66 6.2498L19.45 4.4598ZM16.24 18.1598L18.03 19.9598L19.44 18.5498L17.64 16.7598L16.24 18.1598ZM19 10.4998V12.4998H22V10.4998H19ZM11 5.4998C7.69 5.4998 5 8.1898 5 11.4998C5 14.8098 7.69 17.4998 11 17.4998C14.31 17.4998 17 14.8098 17 11.4998C17 8.1898 14.31 5.4998 11 5.4998ZM10 22.4498H12V19.4998H10V22.4498ZM2.55 18.5398L3.96 19.9498L5.75 18.1498L4.34 16.7398L2.55 18.5398Z" fill="white"/>
        </svg>

        <svg id="theme-toggle-light-icon" className="" width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0C3.18 0 1.47 0.5 0 1.35C2.99 3.08 5 6.3 5 10C5 13.7 2.99 16.92 0 18.65C1.47 19.5 3.18 20 5 20C10.52 20 15 15.52 15 10C15 4.48 10.52 0 5 0Z" fill="#10141D"/>
        </svg>

      </button>

  
  
  )
   
}

export default ThemePicker