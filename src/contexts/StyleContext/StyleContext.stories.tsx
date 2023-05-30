import { Meta } from '@storybook/react'

import { Stack, Switch, Typography } from '@mui/material'

import { StyleProvider, useStyle } from './StyleContext'

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Contexts/StyleContext',
  component: StyleProvider,
}
export default meta

export const Sample = () => {
  const { themeMode, toggleTheme } = useStyle()

  return (
    <Stack alignItems="center">
      <Switch checked={themeMode === 'light'} onChange={toggleTheme} />
      <Typography fontWeight={600} variant="subtitle1">
        {themeMode}
      </Typography>
    </Stack>
  )
}
