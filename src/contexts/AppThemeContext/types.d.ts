import { PropsWithChildren } from 'react'

export declare interface AppTheme extends Theme {
  disabled: string
  link: string
}

export declare type AppThemeContextType = {
  themeMode: string
  toggleTheme: () => void
}

export declare type AppThemeProviderProps = PropsWithChildren<>
