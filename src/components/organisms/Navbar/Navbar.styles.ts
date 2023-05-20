import { SxProps, Theme, useMediaQuery } from '@mui/material'

import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles((theme: Theme) => {
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const rootDesktop: SxProps = {
    height: '100vh',
    justifyContent: 'center',
    px: 3,
    rowGap: 1,
  }

  const rootMobile: SxProps = {
    justifyContent: 'center',
    columnGap: 1,
    flexDirection: 'row',
    py: 2,
    width: '100vw',
  }

  return {
    root: {
      bgcolor: 'background.paper',
      boxShadow: theme.shadows[5],

      ...(isUpMd ? rootDesktop : rootMobile),
    },
  }
})
