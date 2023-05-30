import { Stack, Tab, Tabs } from '@mui/material'
import { FC, useEffect, useMemo, useState } from 'react'

import { TooltipButton } from 'components/atoms/TooltipButton'
import { useJourney } from 'contexts/JourneyContext'
import useWindowSizes from 'hooks/useWindowSizes'
import { ROUTES, ROUTES_VALUES } from 'utils/constants/routes'
import { routing } from 'utils/helpers/routing'

import useStyles from './Navbar.styles'

const Navbar: FC = () => {
  const { changeRoute, currentRoute } = useJourney()
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
      routing.getByPathname(currentRoute?.pathname)?.pathname ||
        ROUTES.get('HOME')?.pathname
    )
  }, [currentRoute?.pathname])

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
                  onClick: () => changeRoute(pathname),
                  'aria-current':
                    pathname === currentRoute?.pathname ? 'page' : undefined,
                  'aria-label': title,
                  'aria-selected': pathname === currentRoute?.pathname,
                }}
                tooltipProps={{
                  'aria-valuetext': title,
                  arrow: true,
                  placement: isDesktop ? 'right' : 'bottom',
                  title,
                }}
              >
                <Icon
                  color={
                    pathname === currentRoute?.pathname ? 'primary' : 'inherit'
                  }
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
