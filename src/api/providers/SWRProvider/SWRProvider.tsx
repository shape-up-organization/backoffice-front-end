import { FC } from 'react'
import { SWRConfig } from 'swr'

import fetcher from 'api/libs/fetcher'

import { SWRProviderProps } from './types'

const REFRESH_INTERVAL = 1000 * 30 // 30 seconds

const SWRProvider: FC<SWRProviderProps> = ({ children }) => (
  <SWRConfig
    value={{
      fetcher,
      refreshInterval: REFRESH_INTERVAL,
      refreshWhenOffline: true,
    }}
  >
    {children}
  </SWRConfig>
)

export { SWRProvider }
