import React from 'react'
import { LI } from 'src/components/Elements'
import { H3 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex } from 'src/components/Grid'
import useSWR from 'swr'
import { GetSettingsQuery } from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { Layout } from 'src/components/Layout'
import { Dialog, DialogBackdrop, useDialogState } from 'reakit/Dialog'
import { HeaderMenu } from './HeaderMenu'
import { T } from '../contexts/I18n'

// const getUniversalUrl = (
//   link: MenuItem,
// ): { routeName: string; slug: string } => {
//   let routeName
//   let slug
//   switch (link.connectedObject.__typename) {
//     case 'Post': {
//       routeName = 'post'
//       slug = link.connectedObject.slug
//       break
//     }
//     case 'Page': {
//       routeName = 'page'
//       slug = link.connectedObject.slug
//       break
//     }
//     case 'Category': {
//       routeName = 'category'
//       slug = link.connectedObject.slug
//       break
//     }
//     case 'Tag': {
//       routeName = 'tag'
//       slug = link.connectedObject.slug
//       break
//     }
//     default: {
//       routeName = link.connectedObject.url
//       break
//     }
//   }
//
//   return { routeName, slug }
// }

interface PropsMenuLink {
  link: MenuItem
}

const MenuLink: React.FC<PropsMenuLink> = ({ link }: PropsMenuLink) => {
  const { routeName, slug } = getUniversalUrl(link)

  return (
    <UniversalLink
      routeName={routeName}
      params={{ slug }}
      web={{
        path: `${routeName}/[slug]`,
        as: `/${routeName}/${slug}`,
      }}
    >
      <LI
        sx={{
          listStyle: 'none',
          mx: { lg: 1, xl: 3 },
          fontFamily: 'heading',
          textTransform: 'capitalize',
          fontSize: 2,
        }}
      >
        <Text>{link.label}</Text>
      </LI>
    </UniversalLink>
  )
}

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
          height: 100,
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
            <Flex
              sx={{
                width: 'full',
                flexDirection: 'row',
                height: sticky ? 50 : 100,
                boxShadow: sticky ? 'rgba(0, 0, 0, 0.15) 0px 1px 4px 0px' : '',
                transitionDuration: '250ms',
                transitionProperty: 'all',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Box sx={{ width: '2/12' }}>
                <Box
                  sx={{
                    alignContent: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      flexDirection: 'row',
                    }}
                  >
                    {/*<DialogDisclosure {...dialog}>*/}
                    <H3 onPress={dialog.show}>
                      <T id="menu.button" />
                    </H3>
                    {/*</DialogDisclosure>*/}
                    <H3>/</H3>
                    <UniversalLink
                      routeName="search"
                      web={{ as: '/search', path: '/search' }}
                    >
                      <H3>
                        <T id="menu.search" />
                      </H3>
                    </UniversalLink>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: '8/12',
                  flexGrow: 1,
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
                    SITE
                  </Text>
                </UniversalLink>
              </Box>
              <Box
                sx={{
                  width: '2/12',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                }}
              >
                <H3 sx={{}}>
                  <T id="menu.donate" />
                </H3>
                <H3 sx={{}}>
                  <T id="menu.newsletter" />
                </H3>
                <H3 sx={{}}>
                  <T id="menu.signin" />
                </H3>
              </Box>
            </Flex>
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
