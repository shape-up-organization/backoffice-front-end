import { PropsWithChildren } from 'react'

export interface Style extends Theme {
  disabled: string
  link: string
}

export type StyleContextType = {
  themeMode: string
  toggleTheme: () => void
}

export type StyleProviderProps = PropsWithChildren<>
