import { AppThemeProvider } from 'contexts/AppThemeContext'
import { ToastSetup } from 'contexts/ToastSetup'
import { AppContextProps } from './types'

const AppContext = ({ children }: AppContextProps) => (
  <AppThemeProvider>
    <ToastSetup />
    {children}
  </AppThemeProvider>
)

export { AppContext }
