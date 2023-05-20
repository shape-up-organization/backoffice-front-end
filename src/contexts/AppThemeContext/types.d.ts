import { PropsWithChildren } from 'react'

export interface AppTheme extends Theme {
  disabled: string
  link: string
}

export type AppThemeContextType = {
  themeMode: string
  toggleTheme: () => void
}

export type AppThemeProviderProps = PropsWithChildren<>
