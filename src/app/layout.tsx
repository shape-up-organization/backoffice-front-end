'use client'

import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { BackendProviders } from 'api/providers/BackendProviders'
import { RootLayoutProps } from 'app/types'
import { Navbar } from 'components/organisms/Navbar'
import { FrontendContexts } from 'contexts/FrontendContexts'
import { useJourney } from 'contexts/JourneyContext'
import useWindowSizes from 'hooks/useWindowSizes'

import useStyles from './RootLayout.styles'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { isDesktop } = useWindowSizes()
  const { currentRoute } = useJourney()
  const classes = useStyles()

  return (
    <html lang="en">
      <head>
        <title>Backoffice</title>
        <link rel="shortcut icon" href="/backoffice-shapeup-icon.svg" />
      </head>
      <FrontendContexts>
        <BackendProviders>
          <Navbar />
          <Stack component="main" sx={{ ...classes.main }}>
            <Typography
              component="h1"
              role="heading"
              id="title"
              sx={{ ...classes.title }}
              variant={isDesktop ? 'h3' : 'h4'}
            >
              {currentRoute?.title}
            </Typography>
            <Stack component="section" sx={{ ...classes.section }}>
              {children}
            </Stack>
          </Stack>
        </BackendProviders>
      </FrontendContexts>
    </html>
  )
}

export default RootLayout
