import { SxProps, useMediaQuery } from '@mui/material'
import { usePathname } from 'next/navigation'

import { makeStyles } from 'utils/helpers/makeStyles'
import { routing } from 'utils/helpers/routing'

export default makeStyles(theme => {
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))
  const currentPathname = usePathname()
  const ifRouteExists = routing.existsByName(currentPathname)

  const rootDesktop: SxProps = {
    height: '100vh',
    justifyContent: 'center',
    px: 3,
    rowGap: 1,
    width: 'fit-content',
  }

  const rootMobile: SxProps = {
    columnGap: 1,
    flexDirection: 'row',
    height: 'fit-content',
    justifyContent: 'center',
    py: 2,
    width: '100vw',
  }

  return {
    root: {
      bgcolor: 'background.paper',
      boxShadow: theme.shadows[5],
      position: 'sticky',
      zIndex: theme.zIndex.appBar,

      ...(isUpMd ? rootDesktop : rootMobile),
    },
  }
})
