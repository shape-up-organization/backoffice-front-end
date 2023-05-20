import '@mui/material'

declare module '@mui/material' {
  interface Palette {
    disabled?: string
    link?: string
  }
  interface PaletteOptions {
    disabled?: string
    link?: string
  }
}
