import { Meta } from '@storybook/react'

import { JourneyProvider } from 'contexts/JourneyContext'

import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  tags: ['autodocs'],
  title: 'Organisms/Navbar',
  component: Navbar,
}
export default meta

export const Sample = () => (
  <JourneyProvider>
    <Navbar />
  </JourneyProvider>
)
