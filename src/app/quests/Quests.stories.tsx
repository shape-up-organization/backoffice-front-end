import { Meta } from '@storybook/react'

import {
  createRequestMock,
  listResponseMock,
  removeResponseMock,
  updateResponseMock,
} from '__mocks__/api/services/quests'
import Layout from '../layout'
import Page from './page'

const meta: Meta<typeof Page> = {
  tags: ['autodocs'],
  title: 'Pages/Quests',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: '/api/quests/:id',
        method: 'DELETE',
        status: 200,
        response: removeResponseMock,
      },
      {
        url: '/api/quests',
        method: 'GET',
        status: 200,
        response: listResponseMock,
      },
      {
        url: '/api/quests',
        method: 'POST',
        status: 200,
        response: createRequestMock,
      },
      {
        url: '/api/quests',
        method: 'PUT',
        status: 200,
        response: updateResponseMock,
      },
    ],
  },
}

export default meta

export const Sample = () => (
  <Layout>
    <Page />
  </Layout>
)
