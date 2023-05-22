import { createTheme } from '@mui/material'
import { Ubuntu } from 'next/font/google'

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F1F1F1',
      paper: '#FAFAFA',
    },
    disabled: '#808080',
    error: {
      main: '#ED145B',
    },
    link: '#0069be',
    primary: {
      contrastText: '#181818',
      dark: '#25D6B6',
      main: '#23C7A8',
    },
    secondary: {
      main: '#00FCA8',
    },
    success: { main: '#26b89d' },
  },
  typography: {
    fontFamily: [ubuntu.style.fontFamily, 'sans-serif'].join(','),
  },
})
