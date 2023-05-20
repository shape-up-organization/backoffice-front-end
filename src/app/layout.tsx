'use client'

import { Box, useMediaQuery } from '@mui/material'
import { FC } from 'react'

import { RootLayoutProps } from 'app/types'
import { Navbar } from 'components/organisms/Navbar'
import { AppContext } from 'contexts/AppContext'
import { theme } from 'contexts/AppThemeContext/theme'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <html lang="en">
      <body>
        <AppContext>
          <Box
            display="flex"
            flexDirection={isUpMd ? 'row' : 'column'}
            height="100vh"
            width="100vw"
          >
            <Navbar />
            {children}
          </Box>
        </AppContext>
      </body>
    </html>
  )
}

export default RootLayout
