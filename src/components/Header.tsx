import React from 'react'
import { H3, H5 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Row } from 'src/components/Grid'
import useSWR from 'swr'
import { GetSettingsQuery } from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { Layout } from 'src/components/Layout'
import { Dialog, DialogBackdrop, useDialogState } from 'reakit/Dialog'
import { HeaderMenu } from './HeaderMenu'
import { T } from '../contexts/I18n'
import { Breadcrumb } from 'src/components/Breadcrumb'
import { Search } from 'react-feather'

interface HeaderProps {
  initialSettingsData?: GetSettingsQuery
  sticky: boolean
}
export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ initialSettingsData, sticky }: HeaderProps, ref) => {
    const dialog = useDialogState()

    const { data }: { data?: GetSettingsQuery } = useSWR(getSettings, {
      initialData: initialSettingsData,
    })

    return (
      <Box
        sx={{
          zIndex: 100,
          height: { xs: 150, sm: 150, md: 100 },
          position: 'relative',
          display: 'flex',
        }}
      >
        <Layout>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bg: 'white',
            }}
          >
            <Row
              sx={{
                width: 'full',
                height: sticky
                  ? { xs: 100, sm: 100, md: 50 }
                  : { xs: 150, sm: 150, md: 100 },
                boxShadow: sticky ? 'xs' : 'none',
                transitionDuration: '250ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease-in-out',
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  width: { xs: '1/2', sm: '1/2', md: '3/12' },
                  order: 1,
                }}
              >
                <Box
                  sx={{
                    alignContent: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      justifyContent: { xs: 'flex-start', sm: 'center' },
                      alignItems: 'baseline',
                      flexDirection: 'row',
                      mt: 2,
                    }}
                  >
                    <Breadcrumb Separator={<H3 sx={{ mx: 1 }}>/</H3>}>
                      <H3 onPress={dialog.show}>
                        <T id="menu.button" />
                      </H3>
                      <UniversalLink
                        routeName="search"
                        web={{ as: '/search', path: '/search' }}
                      >
                        <H3>
                          <Search strokeWidth={3} size="16" />
                          <T id="menu.search" />
                        </H3>
                      </UniversalLink>
                    </Breadcrumb>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: { xs: 'full', sm: 'full', md: '6/12' },
                  flexGrow: 1,
                  order: { xs: 3, sm: 3, md: 2, xl: 2 },
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <UniversalLink routeName="home" web={{ as: '/', path: '/' }}>
                  <Text
                    ref={ref}
                    sx={{
                      m: 'auto',
                      color: 'grayDark',
                      fontFamily: 'heading',
                      fontWeight: sticky ? 700 : 900,
                      fontSize: sticky ? 4 : 8,
                      align: 'center',
                      transitionDuration: '250ms',
                      transitionProperty: 'all',
                      transitionTimingFunction: 'ease-in-out',
                    }}
                  >
                    {data?.settings.title}
                  </Text>
                </UniversalLink>
              </Box>
              <Box
                sx={{
                  width: { xs: '1/2', sm: '1/2', md: '3/12' },
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  mt: 2,
                  order: { xs: 2, sm: 2, md: 3, xl: 3 },
                  flexDirection: 'row',
                }}
              >
                <Breadcrumb Separator={<H5 sx={{ mx: 1 }}>/</H5>}>
                  <H5 sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <T id="menu.donate" />
                  </H5>
                  <H5>
                    <T id="menu.newsletter" />
                  </H5>
                  <H5>
                    <T id="menu.signin" />
                  </H5>
                </Breadcrumb>
              </Box>
            </Row>
          </Box>
        </Layout>
        <DialogBackdrop {...dialog} aria-label="Search">
          <Dialog tabIndex={0} aria-label="Welcome" {...dialog}>
            <Box
              sx={{
                width: 'full',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                bg: 'white',
                transitionDuration: '300ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Text onPress={dialog.hide}>
                <T id="menu.close" />
              </Text>
              <HeaderMenu />
            </Box>
          </Dialog>
        </DialogBackdrop>
      </Box>
    )
  },
)
