import useWindowSizes from 'hooks/useWindowSizes'
import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => {
  const { isDesktop } = useWindowSizes()

  const mainDesktop = {
    p: 8,
  }

  const mainMobile = {
    alignItems: 'center',
    p: 2,
  }

  return {
    main: {
      height: '100%',
      width: '100%',

      ...(isDesktop ? mainDesktop : mainMobile),
    },
    section: {
      height: '100%',
      width: '100%',
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      mb: 4,
    },
  }
})
