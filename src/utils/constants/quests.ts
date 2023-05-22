import AirRoundedIcon from '@mui/icons-material/AirRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded'
import SportsMmaRoundedIcon from '@mui/icons-material/SportsMmaRounded'

import { MuiIcon } from 'types/muiIcon'

export type QuestCategory = {
  color: 'error' | 'info' | 'primary' | 'warning'
  icon: MuiIcon
  name: string
  value: 'AEROBIC' | 'FIGHT' | 'HEALTH' | 'STRENGTH'
}

export const QUESTS_CATEGORIES: QuestCategory[] = [
  {
    color: 'primary',
    icon: AirRoundedIcon,
    name: 'Aerobic',
    value: 'AEROBIC',
  },
  {
    color: 'info',
    icon: SportsMmaRoundedIcon,
    name: 'Fight',
    value: 'FIGHT',
  },
  {
    color: 'error',
    icon: FavoriteRoundedIcon,
    name: 'Health',
    value: 'HEALTH',
  },
  {
    color: 'warning',
    icon: FitnessCenterRoundedIcon,
    name: 'Strength',
    value: 'STRENGTH',
  },
]

export type Classification = {
  color: string
  colorText: string
  value:
    | 'PLATINUM'
    | 'RUBY'
    | 'EMERALD'
    | 'DIAMOND'
    | 'GOLD'
    | 'SILVER'
    | 'BRONZE'
    | 'IRON'
}

export const CLASSIFICATIONS: Classification[] = [
  {
    color: '#ffffff',
    colorText: '#000000',
    value: 'PLATINUM',
  },
  {
    color: '#ff0000',
    colorText: '#ffffff',
    value: 'RUBY',
  },
  {
    color: '#00ff00',
    colorText: '#000000',
    value: 'EMERALD',
  },
  {
    color: '#36e6ec',
    colorText: '#000000',
    value: 'DIAMOND',
  },
  {
    color: '#ffee00',
    colorText: '#000000',
    value: 'GOLD',
  },
  {
    color: '#c0c0c0',
    colorText: '#000000',
    value: 'SILVER',
  },
  {
    color: '#cd7f32',
    colorText: '#ffffff',
    value: 'BRONZE',
  },
  {
    color: '#000000',
    colorText: '#ffffff',
    value: 'IRON',
  },
]
