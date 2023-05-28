import { ButtonBase, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { useJourney } from 'contexts/JourneyContext'

import useStyles from './SectionCard.styles'
import { SectionCardProps } from './types'

const SectionCard: FC<SectionCardProps> = ({ icon: Icon, pathname, title }) => {
  const { changeRoute } = useJourney()
  const classes = useStyles()

  const FUNCTIONS = {
    redirectToService: () => changeRoute(pathname),
  }

  const HANDLERS = {
    handleClickCard: () => FUNCTIONS.redirectToService(),
  }

  return (
    <Stack
      aria-label={`Button that redirects to '${title}'`}
      component={ButtonBase}
      focusRipple
      onClick={HANDLERS.handleClickCard}
      role="button"
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
