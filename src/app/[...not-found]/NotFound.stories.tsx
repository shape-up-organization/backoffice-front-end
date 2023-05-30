import { Meta } from '@storybook/react'

import Layout from '../layout'
import NotFound from './page'

const meta: Meta<typeof NotFound> = {
  tags: ['autodocs'],
  title: 'Pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

export const Sample = () => (
  <Layout>
    <NotFound />
  </Layout>
)
