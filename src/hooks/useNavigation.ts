import { notFound, useRouter } from 'next/navigation'
import { useState } from 'react'

import { ROUTES, Route, RouteMap } from 'utils/constants/routes'
import { routing } from 'utils/helpers/routing'

const useNavigation = () => {
  const router = useRouter()

  const [currentRoute, setCurrentRoute] = useState<RouteMap | undefined>(
    ROUTES.get('HOME')
  )

  const changeRoute = (route: Route | string) => {
    let newRoute
    if (typeof route === 'string') {
      newRoute = routing.getByPathname(route)
    } else {
      newRoute = ROUTES.get(route)
    }

    setCurrentRoute(newRoute)
    document.title = `Backoffice | ${newRoute?.title || '404'}`

    const title = document.querySelector('#title')
    if (title) title.innerHTML = newRoute?.title || ''
    if (!newRoute) notFound()

    router.push(newRoute.pathname)
  }

  return { currentRoute, changeRoute }
}

export default useNavigation
