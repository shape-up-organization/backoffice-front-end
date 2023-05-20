import { CssBaseline, ThemeProvider as ThemeProviderMUI } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, createContext, useContext, useState } from 'react'

import { theme } from 'contexts/AppThemeContext/theme'
import {
  AppThemeContextType,
  AppThemeProviderProps,
} from 'contexts/AppThemeContext/types'

import './globals.scss'

const AppThemeContext = createContext<AppThemeContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
})

const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
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
