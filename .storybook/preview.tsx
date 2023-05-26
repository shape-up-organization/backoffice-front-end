import type { Preview } from '@storybook/react'

import { Stack } from '@mui/material'
import React from 'react'
import { FrontendContexts } from '../src/contexts/FrontendContexts'

const preview: Preview = {
  decorators: [
    Story => (
      <FrontendContexts>
        <Stack
          alignItems="center"
          bgcolor="#FFF"
          height="100vh"
          justifyContent="center"
          width="100%"
        >
          <Story />
        </Stack>
      </FrontendContexts>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
}

export default preview
