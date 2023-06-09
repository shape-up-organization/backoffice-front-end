import { FC } from 'react'

import { ReactQueryProvider } from 'api/providers/ReactQueryProvider'

import { BackendProvidersProps } from './types'

const BackendProviders: FC<BackendProvidersProps> = ({ children }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
)

export { BackendProviders }
