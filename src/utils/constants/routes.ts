import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { MuiIcon } from 'types/muiIcon'

export type RouteMap = {
  icon: MuiIcon
  title: string
  pathname: string
}

export type Route = 'HOME' | 'QUESTS'

const ROUTES: ReadonlyMap<'HOME' | 'QUESTS', RouteMap> = new Map([
  [
    'HOME',
    {
      icon: HomeRoundedIcon,
      pathname: '/',
      title: 'ShapeUp',
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
