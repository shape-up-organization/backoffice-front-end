'use client'

import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { BackendProviders } from 'api/providers/BackendProviders'
import { RootLayoutProps } from 'app/types'
import { Navbar } from 'components/organisms/Navbar'
import { Contexts } from 'contexts/Contexts'
import useNavigation from 'hooks/useNavigation'
import useWindowSizes from 'hooks/useWindowSizes'

import Head from 'next/head'
import useStyles from './RootLayout.styles'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const { isDesktop } = useWindowSizes()
  const { currentRoute } = useNavigation()
  const classes = useStyles()

  console.log(currentRoute)

  return (
    <html lang="en">
      <Head>
        <title>Backoffice | ShapeUp</title>
      </Head>
      <Contexts>
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
      </Contexts>
    </html>
  )
}

export default RootLayout
