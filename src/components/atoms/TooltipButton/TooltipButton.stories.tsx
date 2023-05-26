import { Meta } from '@storybook/react'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'

import { TooltipButton } from './TooltipButton'
import type { TooltipButtonProps } from './types'

const meta: Meta<typeof TooltipButton> = {
  tags: ['autodocs'],
  title: 'Atoms/TooltipButton',
  component: TooltipButton,
  argTypes: {
    buttonProps: {
      control: 'object',
      description: 'Props for the icon button component',
    },
    children: {
      description: 'Icon to be displayed',
      options: [
        'add',
        'circle',
        'close',
        'delete',
        'edit',
        'remove',
        'send',
        'visibility',
      ],
      mapping: {
        add: <AddCircleRoundedIcon color="primary" fontSize="large" />,
        circle: <CircleRoundedIcon color="primary" fontSize="large" />,
        close: <CloseRoundedIcon color="primary" fontSize="large" />,
        delete: <DeleteRoundedIcon color="primary" fontSize="large" />,
        edit: <EditRoundedIcon color="primary" fontSize="large" />,
        remove: <RemoveCircleRoundedIcon color="primary" fontSize="large" />,
        send: <SendRoundedIcon color="primary" fontSize="large" />,
        visibility: <VisibilityRoundedIcon color="primary" fontSize="large" />,
      },
    },
    tooltipProps: {
      control: 'object',
      description: 'Props for the tooltip component',
    },
  },
}
export default meta

export const Sample = (args: TooltipButtonProps) => <TooltipButton {...args} />
Sample.args = {
  buttonProps: {
    sx: {
      borderColor: 'primary.main',
      borderStyle: 'solid',
      borderWidth: 2,
    },
  },
  children: <AddCircleRoundedIcon color="primary" fontSize="large" />,
  tooltipProps: {
    title: 'Tooltip title',
  },
}

export const Disabled = (args: TooltipButtonProps) => (
  <TooltipButton {...args} />
)
Disabled.args = {
  buttonProps: {
    disabled: true,
  },
  children: <RemoveCircleRoundedIcon fontSize="large" />,
  tooltipProps: {
    title: 'Tooltip disabled title',
  },
}
