"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  defaultTheme?: string
  enableSystem?: boolean
  storageKey?: string
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
