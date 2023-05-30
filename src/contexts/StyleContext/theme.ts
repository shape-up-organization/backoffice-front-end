import { createTheme } from '@mui/material'

import localFont from 'next/font/local'

export const ubuntu = localFont({
  src: [
    {
      path: './fonts/ubuntu/Ubuntu-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ubuntu/Ubuntu-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/ubuntu/Ubuntu-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ubuntu/Ubuntu-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/ubuntu/Ubuntu-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ubuntu/Ubuntu-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/ubuntu/Ubuntu-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ubuntu/Ubuntu-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#23C7A8 #F1F1F1',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#F1F1F1',
            width: 12,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#23C7A8',
            borderColor: '#F1F1F1',
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 2,
            minHeight: 24,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus, &::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active, &::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#25D6B6',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#F1F1F1',
          },
        },
      },
    },
  },
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
