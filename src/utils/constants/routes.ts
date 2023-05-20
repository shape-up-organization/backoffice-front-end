import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { MuiIcon } from 'types/muiIcon'

export type RoutesMap = {
  icon: MuiIcon
  title: string
  pathname: string
}

const ROUTES = new Map<string, RoutesMap>([
  [
    'HOME' as const,
    {
      icon: HomeRoundedIcon,
      pathname: '/',
      title: 'Home',
    },
  ],
  [
    'QUESTS' as const,
    {
      icon: CrisisAlertRoundedIcon,
      pathname: '/quests',
      title: 'Quests',
    },
  ],
])

const ROUTES_VALUES = Array.from(ROUTES.values())

export { ROUTES, ROUTES_VALUES }
