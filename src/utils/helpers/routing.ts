import { ROUTES_VALUES } from 'utils/constants/routes'

const routing = {
  existsByPathname: (pathname: string | undefined) =>
    routing.getByPathname(pathname) !== undefined,
  getByPathname: (pathname: string | undefined) =>
    ROUTES_VALUES.find(route => route.pathname === pathname),
}

export { routing }
