'use client'

import { AppContext } from '@/contexts/AppContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  )
}
