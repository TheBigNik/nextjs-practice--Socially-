'use client'

import React from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'


const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
  return (
    <Button
    variant={'outline'}
    size={"icon"}
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <SunIcon className='rotate-0 scale-100 dark:scale-0 transition-all dark:-rotate-90'/>
        <MoonIcon className='absolute scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100'/>
    </Button>
  )
}

export default ModeToggle