import { SxProps, useMediaQuery } from '@mui/material'

import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => {
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const rootDesktop: SxProps = {
    height: '100vh',
    justifyContent: 'center',
    px: 2,
    rowGap: 1,
    width: 'fit-content',
  }

  const rootMobile: SxProps = {
    columnGap: 1,
    flexDirection: 'row',
    height: 'fit-content',
    justifyContent: 'center',
    py: 1,
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
  }
})
