import { createContext, useContext, useState } from 'react'

import { CssBaseline, ThemeProvider as ThemeProviderMUI } from '@mui/material'
import { motion } from 'framer-motion'

import './globals.css'
import { theme } from './theme'
import type { AppThemeContextType, AppThemeProviderProps } from './types'

const AppThemeContext = createContext<AppThemeContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
})

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [themeMode, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(themeMode === 'light' ? 'dark' : 'light')
  }

  return (
    <AppThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProviderMUI theme={theme}>
        <CssBaseline />
        <motion.div
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          exit={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          initial={{ filter: 'blur(3px)', opacity: 0, scale: 0.98 }}
          transition={{ easings: 'easeInOut', duration: 0.2 }}
          style={{
            display: 'flex',
            height: '100%',
            rowGap: 2,
            width: '100%',
          }}
        >
          {children}
        </motion.div>
      </ThemeProviderMUI>
    </AppThemeContext.Provider>
  )
}

const useAppTheme = () => useContext(AppThemeContext)

export { AppThemeProvider, AppThemeContext, useAppTheme }
