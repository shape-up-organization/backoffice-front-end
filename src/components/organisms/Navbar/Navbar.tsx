import { Stack, Tab, Tabs } from '@mui/material'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useMemo, useState } from 'react'

import { TooltipButton } from 'components/atoms/TooltipButton'
import useNavigation from 'hooks/useNavigation'
import useWindowSizes from 'hooks/useWindowSizes'
import { ROUTES, ROUTES_VALUES } from 'utils/constants/routes'
import { routing } from 'utils/helpers/routing'

import useStyles from './Navbar.styles'

const Navbar: FC = () => {
  const currentPathname = usePathname()

  const { changeRoute, currentRoute } = useNavigation()
  const { isDesktop } = useWindowSizes()
  const classes = useStyles()

  const [serviceTab, setServiceTab] = useState(ROUTES.get('HOME')?.pathname)

  const HANDLERS = useMemo(
    () => ({
      handleChangeTab: (newTab: string | undefined) => setServiceTab(newTab),
    }),
    []
  )

  useEffect(() => {
    HANDLERS.handleChangeTab(
      routing.getByPathname(currentPathname)?.pathname ||
        ROUTES.get('HOME')?.pathname
    )
  }, [HANDLERS, currentPathname])

  return (
    <Stack component="nav" sx={{ ...classes.root }}>
      <Tabs
        allowScrollButtonsMobile
        orientation={isDesktop ? 'vertical' : 'horizontal'}
        scrollButtons="auto"
        TabIndicatorProps={{ sx: { ...classes.tabIndicator } }}
        value={serviceTab}
        variant={isDesktop ? 'fullWidth' : 'scrollable'}
      >
        {Array.from(ROUTES_VALUES).map(({ icon: Icon, pathname, title }) => (
          <Tab
            key={pathname}
            component="div"
            disableRipple
            icon={
              <TooltipButton
                key={title}
                buttonProps={{
                  onClick: () => {
                    HANDLERS.handleChangeTab(pathname)
                    changeRoute(pathname)
                  },
                  'aria-current':
                    pathname === currentPathname ? 'page' : undefined,
                  'aria-label': title,
                  'aria-selected': pathname === currentPathname,
                }}
                tooltipProps={{
                  'aria-valuetext': title,
                  arrow: true,
                  placement: isDesktop ? 'right' : 'bottom',
                  title,
                }}
              >
                <Icon
                  color={pathname === currentPathname ? 'primary' : 'inherit'}
                  sx={{ ...classes.icon }}
                />
              </TooltipButton>
            }
            sx={{ ...classes.tab }}
            value={pathname}
          />
        ))}
      </Tabs>
    </Stack>
  )
}

export { Navbar }
