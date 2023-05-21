import { FC } from 'react'

import { StyleProvider } from 'contexts/StyleContext'
import { Toast } from 'contexts/Toast'

import { ContextsProps } from './types'

const Contexts: FC<ContextsProps> = ({ children }) => (
  <StyleProvider>
    <Toast />
    {children}
  </StyleProvider>
)

export { Contexts }
