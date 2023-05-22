import { CssBaseline, ThemeProvider as ThemeProviderMUI } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, createContext, useContext, useMemo, useState } from 'react'

import { theme } from 'contexts/StyleContext/theme'
import type {
  StyleContextType,
  StyleProviderProps,
} from 'contexts/StyleContext/types'
import useWindowSizes from 'hooks/useWindowSizes'

import './globals.scss'

const StyleContext = createContext<StyleContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
})

const StyleProvider: FC<StyleProviderProps> = ({ children }) => {
  const { isDesktop } = useWindowSizes()

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const values = useMemo(() => ({ themeMode, toggleTheme }), [])

  return (
    <StyleContext.Provider value={values}>
      <ThemeProviderMUI theme={theme}>
        <CssBaseline />
        <motion.body
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          exit={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          initial={{ filter: 'blur(3px)', opacity: 0, scale: 0.98 }}
          transition={{ easings: 'easeInOut', duration: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            height: '100%',
            rowGap: 2,
            width: '100%',
          }}
        >
          {children}
        </motion.body>
      </ThemeProviderMUI>
    </StyleContext.Provider>
  )
}

const useStyle = () => useContext(StyleContext)

export { StyleProvider, StyleContext, useStyle }
