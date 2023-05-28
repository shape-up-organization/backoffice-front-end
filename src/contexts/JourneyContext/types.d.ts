import { PropsWithChildren } from 'react'

export type JourneyContextType = {
  changeRoute: (route: string) => void
  currentRoute: RouteMap | undefined
}

export type JourneyProviderProps = PropsWithChildren<>
