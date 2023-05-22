import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC } from 'react'

import { ReactQueryProviderProps } from './types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export { ReactQueryProvider }
