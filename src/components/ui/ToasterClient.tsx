"use client"

import React from 'react'
import { Toaster } from './sonner'
import { useTheme } from 'next-themes'

const ToasterClient = () => {

    const { theme } = useTheme();

    return (
        <Toaster
            theme={theme as "light" | "dark" | "system"}
            position="bottom-center"
        />
    )
}

export default ToasterClient