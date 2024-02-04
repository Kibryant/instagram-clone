'use client'

import * as React from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  readonly children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export { Providers }
