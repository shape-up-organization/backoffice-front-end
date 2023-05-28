import { notFound, useRouter } from 'next/navigation'
import { FC, createContext, useContext, useMemo, useState } from 'react'

import { ROUTES, RouteMap } from 'utils/constants/routes'
import { routing } from 'utils/helpers/routing'

import type { JourneyContextType, JourneyProviderProps } from './types'

const JourneyContext = createContext<JourneyContextType>({
  changeRoute: () => {},
  currentRoute: ROUTES.get('HOME'),
})

const JourneyProvider: FC<JourneyProviderProps> = ({ children }) => {
  const router = useRouter()

  const [currentRoute, setCurrentRoute] = useState<RouteMap | undefined>(
    ROUTES.get('HOME')
  )

  const changeRoute = (route: string) => {
    const newRoute = routing.getByPathname(route)

    setCurrentRoute(newRoute)

    document.title = newRoute?.title ? 'Backoffice' : '404'

    const title = document.querySelector('#title')
    if (title) title.innerHTML = newRoute?.title || ''
    if (!newRoute) notFound()

    router.push(newRoute?.pathname || route)
  }

  const values: JourneyContextType = useMemo(
    () => ({
      currentRoute,
      changeRoute,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentRoute]
  )

  return (
    <JourneyContext.Provider value={values}>{children}</JourneyContext.Provider>
  )
}

const useJourney = () => useContext(JourneyContext)

export { JourneyProvider, JourneyContext, useJourney }
