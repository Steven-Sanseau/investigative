import React from 'react'
import { HR, LI, UL } from 'src/components/Elements'
import { H1 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex } from 'src/components/Grid'
import useSWR from 'swr'
import { GetSettingsQuery, MenuItem } from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { Layout } from 'src/components/Layout'

const getUniversalUrl = (
  link: MenuItem,
): { routeName: string; slug: string } => {
  let routeName
  let slug
  switch (link.connectedObject.__typename) {
    case 'Post': {
      routeName = 'post'
      slug = link.connectedObject.slug
      break
    }
    case 'Page': {
      routeName = 'page'
      slug = link.connectedObject.slug
      break
    }
    case 'Category': {
      routeName = 'category'
      slug = link.connectedObject.slug
      break
    }
    case 'Tag': {
      routeName = 'tag'
      slug = link.connectedObject.slug
      break
    }
    default: {
      routeName = link.connectedObject.url
      break
    }
  }

  return { routeName, slug }
}

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

const HeaderWrapper = Box

interface HeaderProps {
  initialSettingsData?: GetSettingsQuery
}
export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ initialSettingsData }: HeaderProps, ref) => {
    const { data }: { data?: GetSettingsQuery } = useSWR(getSettings, {
      initialData: initialSettingsData,
    })

    return (
      <Box ref={ref}>
        <Layout>
          <HeaderWrapper>
            <Flex sx={{ justifyContent: 'center', mx: 'auto' }}>
              <UniversalLink
                routeName="home"
                web={{
                  path: ``,
                }}
              >
                <H1>{data?.settings?.title}</H1>
              </UniversalLink>
            </Flex>
            <Flex>
              <HR sx={{ width: 'full', height: '2rpx' }} />
            </Flex>
            <Flex sx={{ width: 'full' }}>
              <UL
                sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
              >
                <LI>
                  <UniversalLink
                    routeName="page"
                    params={{ uri: 'about' }}
                    web={{
                      path: `/page/about`,
                      as: `/page/about`,
                    }}
                  >
                    <Text>About</Text>
                  </UniversalLink>
                </LI>
                <LI>
                  <UniversalLink
                    routeName="category"
                    params={{ uri: 'featured' }}
                    web={{
                      path: `/category/featured`,
                      as: `/category/featured`,
                    }}
                  >
                    <Text>Featured</Text>
                  </UniversalLink>
                </LI>
                {data?.menus?.nodes[0].menuItems?.nodes.map(
                  (link, i: React.ReactText) =>
                    link && (
                      //@ts-ignore
                      <MenuLink link={link} key={i} />
                    ),
                )}
              </UL>
              <HR sx={{ width: 'full', height: '1rpx', bg: 'grayDark' }} />
            </Flex>
          </HeaderWrapper>
        </Layout>
      </Box>
    )
  },
)
