'use client'

import { Stack } from '@mui/material'
import { FC } from 'react'

import { SectionCard } from 'components/atoms/SectionCard'
import { ROUTES, ROUTES_VALUES } from 'utils/constants/routes'

import useStyles from './Home.styles'

const Home: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Stack sx={{ ...classes.root }}>
        {ROUTES_VALUES.map(
          ({ icon, pathname, title }) =>
            pathname !== ROUTES.get('HOME')?.pathname && (
              <SectionCard
                key={title}
                icon={icon}
                pathname={pathname}
                title={title}
              />
            )
        )}
      </Stack>
    </>
  )
}

export default Home
