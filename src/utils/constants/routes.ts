import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

const ROUTES = new Map([
  [
    'HOME',
    {
      icon: HomeRoundedIcon,
      name: 'Home',
      pathname: '/',
    },
  ],
  [
    'QUESTS',
    {
      icon: CrisisAlertRoundedIcon,
      name: 'Quests',
      pathname: '/quests',
    },
  ],
])

const ROUTES_VALUES = Array.from(ROUTES.values())

export { ROUTES, ROUTES_VALUES }
