'use client'

import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import notFoundWithNumber from 'public/not-found-with-number.svg'

import useStyles from './NotFound.styles'

const NotFound: FC = () => {
  const classes = useStyles()

  return (
    <Stack sx={{ ...classes.root }}>
      <Typography
        align="center"
        component="h1"
        role="heading"
        sx={{ ...classes.title }}
        variant="h5"
      >
        Page not found
      </Typography>
      <Image
        alt="Not found image"
        height={321}
        src={notFoundWithNumber}
        style={{ maxWidth: '100%', objectFit: 'contain' }}
        width={454}
      />
    </Stack>
  )
}

export default NotFound
