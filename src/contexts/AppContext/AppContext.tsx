import { FC } from 'react'

import { AppContextProps } from 'contexts/AppContext/types'
import { AppThemeProvider } from 'contexts/AppThemeContext'
import { Toast } from 'contexts/Toast'

const AppContext: FC<AppContextProps> = ({ children }) => (
  <AppThemeProvider>
    <Toast />
    {children}
  </AppThemeProvider>
)

export { AppContext }
