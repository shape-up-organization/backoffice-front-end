import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

import { TooltipButton } from 'components/atoms/TooltipButton'
import { ROUTES } from 'utils/constants/routes'

import useStyles from './Navbar.styles'

const Navbar: FC = () => {
  const currentPathname = usePathname()
  const router = useRouter()
  const theme = useTheme()
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  return (
    <Stack
      component="nav"
      divider={
        <Divider flexItem orientation={isUpMd ? 'horizontal' : 'vertical'} />
      }
      sx={{
        ...classes.root,
      }}
    >
      {Array.from(ROUTES).map(([route, { icon: Icon, name, pathname }]) => (
        <TooltipButton
          key={route}
          buttonProps={{
            onClick: () => router.push(pathname),
            'aria-current': pathname === currentPathname ? 'page' : undefined,
            'aria-label': name,
            'aria-selected': pathname === currentPathname,
          }}
          tooltipProps={{
            placement: isUpMd ? 'right' : 'bottom',
            title: name,
            'aria-valuetext': name,
          }}
        >
          <Icon color={pathname === currentPathname ? 'primary' : 'inherit'} />
        </TooltipButton>
      ))}
    </Stack>
  )
}

export { Navbar }
