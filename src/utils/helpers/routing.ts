import { ROUTES_VALUES } from 'utils/constants/routes'

const routing = {
  existsByPathname: (pathname: string) =>
    routing.getByPathname(pathname) !== undefined,
  getByPathname: (pathname: string) =>
    ROUTES_VALUES.find(route => route.pathname === pathname),
}

export { routing }
