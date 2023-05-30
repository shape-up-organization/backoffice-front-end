import { Meta } from '@storybook/react'

import Layout from './layout'
import Page from './page'

const meta: Meta<typeof Page> = {
  tags: ['autodocs'],
  title: 'Pages/Home',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

export const Sample = () => (
  <Layout>
    <Page />
  </Layout>
)
