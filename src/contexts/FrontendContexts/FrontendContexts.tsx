import { FC } from 'react'

import { JourneyProvider } from 'contexts/JourneyContext'
import { StyleProvider } from 'contexts/StyleContext'
import { Toast } from 'contexts/Toast'

import { FrontendContextsProps } from './types'

const FrontendContexts: FC<FrontendContextsProps> = ({ children }) => (
  <StyleProvider>
    <JourneyProvider>
      <Toast />
      {children}
    </JourneyProvider>
  </StyleProvider>
)

export { FrontendContexts }
