import { FC } from 'react'

import { StyleProvider } from 'contexts/StyleContext'
import { Toast } from 'contexts/Toast'

import { FrontendContextsProps } from './types'

const FrontendContexts: FC<FrontendContextsProps> = ({ children }) => (
  <StyleProvider>
    <Toast />
    {children}
  </StyleProvider>
)

export { FrontendContexts }
