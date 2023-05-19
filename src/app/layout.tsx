'use client'

import { FC } from 'react'

import { AppContext } from 'contexts/AppContext'
import { RootLayoutProps } from './types'

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  )
}

export default RootLayout
