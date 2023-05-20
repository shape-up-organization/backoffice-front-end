import { Divider, Stack } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

import { TooltipButton } from 'components/atoms/TooltipButton'
import useWindowSizes from 'hooks/useWindowSizes'
import { ROUTES } from 'utils/constants/routes'

import useStyles from './Navbar.styles'

const Navbar: FC = () => {
  const currentPathname = usePathname()
  const router = useRouter()
  const { isDesktop } = useWindowSizes()

  const classes = useStyles()

  return (
    <Stack
      component="nav"
      divider={
        <Divider flexItem orientation={isDesktop ? 'horizontal' : 'vertical'} />
      }
      sx={{ ...classes.root }}
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
            arrow: true,
            placement: isDesktop ? 'right' : 'bottom',
            title: name,
            'aria-valuetext': name,
          }}
        >
          <Icon
            color={pathname === currentPathname ? 'primary' : 'inherit'}
            sx={{ ...classes.icon }}
          />
        </TooltipButton>
      ))}
    </Stack>
  )
}

export { Navbar }
