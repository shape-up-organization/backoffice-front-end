import { IconButton, Tooltip } from '@mui/material'
import { FC } from 'react'

import { TooltipButtonProps } from './types'

const TooltipButton: FC<TooltipButtonProps> = ({
  buttonProps,
  children,
  tooltipProps = { title: '' },
}) => {
  const { title = '', ...restTooltipProps } = tooltipProps

  const spanWarningCorrection = {
    disabled: buttonProps?.disabled || false,
    component: buttonProps?.disabled ? 'div' : undefined,
    onClick: buttonProps?.disabled ? undefined : buttonProps?.onClick,
  }

  return (
    <Tooltip
      title={buttonProps?.disabled ? '' : title}
      {...restTooltipProps}
      suppressContentEditableWarning
    >
      <IconButton {...buttonProps} {...spanWarningCorrection}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

export { TooltipButton }
