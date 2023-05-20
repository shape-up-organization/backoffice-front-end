import { makeStyles } from 'utils/helpers/makeStyles'

export default makeStyles(theme => ({
  root: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    px: 2,
    width: '100%',
  },
  title: {
    align: 'center',
    color: theme.palette.primary.main,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))
