import { notFound, useRouter } from 'next/navigation'
import { useState } from 'react'

import { ROUTES, RouteMap } from 'utils/constants/routes'
import { routing } from 'utils/helpers/routing'

const useNavigation = () => {
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

  return { currentRoute, changeRoute }
}

export default useNavigation
