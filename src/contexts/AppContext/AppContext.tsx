import { FC } from 'react'

import { AppContextProps } from 'contexts/AppContext/types'
import { StyleProvider } from 'contexts/StyleContext'
import { Toast } from 'contexts/Toast'

const AppContext: FC<AppContextProps> = ({ children }) => (
  <StyleProvider>
    <Toast />
    {children}
  </StyleProvider>
)

export { AppContext }
