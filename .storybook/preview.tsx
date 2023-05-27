import type { Preview } from '@storybook/react'

import React from 'react'
import { StyleProvider } from '../src/contexts/StyleContext'

const preview: Preview = {
  decorators: [
    Story => (
      <StyleProvider>
        <Story />
      </StyleProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F1F1F1',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
}

export default preview
