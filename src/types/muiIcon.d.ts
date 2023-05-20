import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export declare type MuiIcon = OverridableComponent<
  SvgIconTypeMap<{}, 'svg'>
> & {
  muiName: string
}
