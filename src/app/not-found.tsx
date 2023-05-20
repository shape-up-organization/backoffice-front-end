'use client'

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { TooltipButton } from 'components/atoms/TooltipButton'
import { useRouter } from 'next/navigation'
import notFoundWithNumber from 'public/not-found-with-number.svg'

const NotFound: FC = () => {
  const router = useRouter()

  return (
    <>
      <TooltipButton
        buttonProps={{
          onClick: () => router.back(),
        }}
        tooltipProps={{
          placement: 'right',
          sx: { left: 16, position: 'fixed', top: 16 },
          title: 'Go back',
        }}
      >
        <ArrowBackRoundedIcon />
      </TooltipButton>
      <Stack
        alignItems="center"
        height="100vh"
        justifyContent="center"
        px={2}
        width="100vw"
      >
        <Typography
          align="center"
          color="primary"
          fontWeight={700}
          textTransform="uppercase"
          variant="h5"
        >
          Page not found
        </Typography>
        <Image
          alt="Not found image"
          src={notFoundWithNumber}
          style={{ maxWidth: '100%', objectFit: 'contain' }}
        />
      </Stack>
    </>
  )
}

export default NotFound
