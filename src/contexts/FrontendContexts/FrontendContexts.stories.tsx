import { Meta } from '@storybook/react'

import { Switch, Typography } from '@mui/material'

import { useStyle } from 'contexts/StyleContext'

import { Stack } from '@mui/material'
import useToast from 'hooks/useToast'
import { FrontendContexts } from './FrontendContexts'

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Contexts/FrontendContexts',
  component: FrontendContexts,
}
export default meta

export const Sample = () => {
  const { themeMode, toggleTheme } = useStyle()
  const { handleToast } = useToast()

  const toggleWithToast = () => {
    toggleTheme()
    handleToast({
      message: 'Theme changed',
      type: themeMode === 'light' ? 'default' : 'success',
    })
  }

  return (
    <FrontendContexts>
      <Stack
        alignItems="center"
        flexDirection="column"
        height={464}
        justifyContent="center"
        width={424}
      >
        <Switch checked={themeMode === 'light'} onChange={toggleWithToast} />
        <Typography fontWeight={600} variant="subtitle1">
          {themeMode}
        </Typography>
      </Stack>
    </FrontendContexts>
  )
}
