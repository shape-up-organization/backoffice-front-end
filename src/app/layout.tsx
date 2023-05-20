'use client'

import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { RootLayoutProps } from 'app/types'
import { Navbar } from 'components/organisms/Navbar'
import { AppContext } from 'contexts/AppContext'
import useWindowSizes from 'hooks/useWindowSizes'

import useStyles from './RootLayout.styles'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { isDesktop } = useWindowSizes()
  const classes = useStyles()

  return (
    <html lang="en">
      <AppContext>
        <Navbar />
        <Stack component="main" sx={{ ...classes.main }}>
          <Typography
            component="h1"
            role="heading"
            sx={{ ...classes.title }}
            variant={isDesktop ? 'h3' : 'h4'}
          >
            ShapeUp
          </Typography>
          <Stack component="section" sx={{ ...classes.section }}>
            {children}
          </Stack>
        </Stack>
      </AppContext>
    </html>
  )
}

export default RootLayout
