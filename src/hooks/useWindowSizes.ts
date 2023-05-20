import { useMediaQuery, useTheme } from '@mui/material'

const useWindowSizes = () => {
  const theme = useTheme()
  const sizes = {
    isDesktop: useMediaQuery(theme.breakpoints.up('md')),
    isMobile: useMediaQuery(theme.breakpoints.down('md')),
  }

  return sizes
}

export default useWindowSizes
