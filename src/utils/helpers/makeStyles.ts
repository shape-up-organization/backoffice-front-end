import { SxProps, Theme } from '@mui/material'

import { theme } from 'contexts/StyleContext/theme'

interface StylesObject {
  [key: string]: SxProps
}

export const makeStyles =
  <T extends StylesObject, P = {}>(styles: (theme: Theme, props: P) => T) =>
  (props?: P): T =>
    styles(theme, props as P)
