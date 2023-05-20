import { CssBaseline, ThemeProvider as ThemeProviderMUI } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, createContext, useContext, useState } from 'react'

import { theme } from 'contexts/StyleContext/theme'
import {
  StyleContextType,
  StyleProviderProps,
} from 'contexts/StyleContext/types'

import './globals.scss'

const StyleContext = createContext<StyleContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
})

const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  return (
    <StyleContext.Provider value={{ themeMode, toggleTheme }}>
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
    </StyleContext.Provider>
  )
}

const useStyle = () => useContext(StyleContext)

export { StyleProvider, StyleContext, useStyle }
