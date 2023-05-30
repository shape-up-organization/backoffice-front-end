import { PropsWithChildren } from 'react'

export interface Style extends Theme {
  disabled: string
  link: string
}

export type StyleContextType = {
  themeMode: 'light' | 'dark'
  toggleTheme: () => void
}

export type StyleProviderProps = PropsWithChildren<>
