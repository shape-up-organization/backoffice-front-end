import { FC } from 'react'

import { AppContextProps } from 'contexts/AppContext/types'
import { AppThemeProvider } from 'contexts/AppThemeContext'
import { ToastSetup } from 'contexts/ToastSetup'

const AppContext: FC<AppContextProps> = ({ children }) => (
  <AppThemeProvider>
    <ToastSetup />
    {children}
  </AppThemeProvider>
)

export { AppContext }
