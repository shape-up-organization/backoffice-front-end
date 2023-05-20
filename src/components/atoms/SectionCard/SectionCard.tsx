import { ButtonBase, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import useStyles from './SectionCard.styles'
import { SectionCardProps } from './types'

const SectionCard: FC<SectionCardProps> = ({ icon: Icon, pathname, title }) => {
  const classes = useStyles()
  const router = useRouter()

  const FUNCTIONS = {
    redirectToService: () => router.push(pathname),
  }

  const HANDLERS = {
    handleClickCard: () => FUNCTIONS.redirectToService(),
  }

  return (
    <Stack
      aria-label={`Button that redirects to '${title}'`}
      component={ButtonBase}
      focusRipple
      role="button"
      onClick={HANDLERS.handleClickCard}
      sx={{ ...classes.root }}
      tabIndex={0}
      type="button"
    >
      <Icon sx={{ ...classes.icon }} />
      <Typography sx={{ ...classes.title }} variant="subtitle1">
        {title}
      </Typography>
    </Stack>
  )
}

export { SectionCard }
