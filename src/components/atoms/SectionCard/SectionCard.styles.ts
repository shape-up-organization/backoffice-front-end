import useWindowSizes from 'hooks/useWindowSizes'
import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => {
  const { isDesktop } = useWindowSizes()

  return {
    icon: {
      color: theme.palette.primary.main,
      fontSize: isDesktop ? 40 : 32,

      '&:active, &:focus, &:hover': {
        color: theme.palette.primary.dark,
      },
    },
    root: {
      alignItems: 'center',
      borderColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius / 2,
      borderStyle: 'solid',
      borderWidth: 2,
      flex: 1,
      justifyContent: 'center',
      px: 10,
      py: 3,

      '&:active, &:focus, &:hover': {
        borderColor: theme.palette.primary.dark,
      },
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      textTransform: 'capitalize',
    },
  }
})
