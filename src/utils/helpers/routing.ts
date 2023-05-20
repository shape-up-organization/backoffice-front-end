import { ROUTES_VALUES } from 'utils/constants/routes'

const routing = {
  existsByName: (pathname: string) =>
    ROUTES_VALUES.some(route => route.pathname === pathname),
}

export { routing }
