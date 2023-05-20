import { IconButtonProps, TooltipProps } from '@mui/material'
import type { PropsWithChildren } from 'react'

type TooltipPropsMod = Omit<TooltipProps, 'children' | 'title'> & {
  title?: string
}

export type TooltipButtonProps = PropsWithChildren<{
  buttonProps?: IconButtonProps
  tooltipProps?: TooltipPropsMod
}>
