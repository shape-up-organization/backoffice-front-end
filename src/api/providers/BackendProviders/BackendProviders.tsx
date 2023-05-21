import { FC } from 'react'

import { SWRProvider } from 'api/providers/SWRProvider'

import { BackendProvidersProps } from './types'

const BackendProviders: FC<BackendProvidersProps> = ({ children }) => (
  <SWRProvider>{children}</SWRProvider>
)

export { BackendProviders }
