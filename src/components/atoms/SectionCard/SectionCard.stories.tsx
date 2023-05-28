import { Meta } from '@storybook/react'

import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { SectionCard } from './SectionCard'
import type { SectionCardProps } from './types'

const meta: Meta<typeof SectionCard> = {
  tags: ['autodocs'],
  title: 'Atoms/SectionCard',
  component: SectionCard,
  argTypes: {
    icon: {
      defaultValue: { summary: null },
      description: 'Icon to be displayed',
      options: ['home', 'quests'],
      mapping: {
        home: HomeRoundedIcon,
        quests: CrisisAlertRoundedIcon,
      },
    },
    pathname: {
      control: 'text',
      defaultValue: { summary: '' },
      description: 'Pathname to be redirected to',
      type: { name: 'string', required: true },
    },
    title: {
      control: 'text',
      defaultValue: { summary: '' },
      description: 'Title to be displayed',
      type: { name: 'string', required: true },
    },
  },
}
export default meta

export const Sample = (args: SectionCardProps) => <SectionCard {...args} />
Sample.args = {
  icon: CrisisAlertRoundedIcon,
  pathname: '/',
  title: 'ShapeUp',
}
