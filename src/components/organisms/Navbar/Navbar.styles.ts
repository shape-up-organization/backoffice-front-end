import { SxProps, useMediaQuery } from '@mui/material'

import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => {
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const rootDesktop: SxProps = {
    height: '100vh',
    justifyContent: 'center',
    width: 'fit-content',
  }

  const rootMobile: SxProps = {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw',
  }

  return {
    icon: {
      fontSize: isUpMd ? 32 : 24,
    },
    root: {
      bgcolor: 'background.paper',
      boxShadow: theme.shadows[5],
      position: 'sticky',
      zIndex: theme.zIndex.appBar,

      ...(isUpMd ? rootDesktop : rootMobile),
    },
    tab: {
      cursor: 'default',
      height: '100%',
      justifyContent: 'center',
      my: 1,
      p: 0,
    },
    tabIndicator: {
      left: 0,
      width: 4,
      height: 3,
    },
  }
})
