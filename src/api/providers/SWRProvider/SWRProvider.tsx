import { FC } from 'react'
import { SWRConfig } from 'swr'

import fetcher from 'api/libs/fetcher'

import { SWRProviderProps } from './types'

const SWRProvider: FC<SWRProviderProps> = ({ children }) => (
  <SWRConfig
    value={{
      fetcher,
      shouldRetryOnError: false,
    }}
  >
    {children}
  </SWRConfig>
)

export { SWRProvider }
