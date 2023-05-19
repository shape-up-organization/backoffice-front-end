import { IconButton, Tooltip } from '@mui/material'
import { FC } from 'react'

import { TooltipButtonProps } from './types'

const TooltipButton: FC<TooltipButtonProps> = ({
  buttonProps,
  children,
  tooltipProps = { title: '' },
}) => {
  const { title = '', ...restTooltipProps } = tooltipProps

  return (
    <Tooltip title={title} {...restTooltipProps}>
      <IconButton {...buttonProps}>{children}</IconButton>
    </Tooltip>
  )
}

export { TooltipButton }
