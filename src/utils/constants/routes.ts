import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { MuiIcon } from 'types/muiIcon'

const ROUTE_KEYS = ['HOME', 'QUESTS'] as const

export type RoutesMap = {
  icon: MuiIcon
  title: string
  pathname: string
}

const ROUTES: ReadonlyMap<(typeof ROUTE_KEYS)[number], RoutesMap> = new Map([
  [
    'HOME',
    {
      icon: HomeRoundedIcon,
      pathname: '/',
      title: 'Home',
    },
  ],
  [
    'QUESTS',
    {
      icon: CrisisAlertRoundedIcon,
      pathname: '/quests',
      title: 'Quests',
    },
  ],
])

const ROUTES_VALUES = Array.from(ROUTES.values())

export { ROUTES, ROUTES_VALUES }
