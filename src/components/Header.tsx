import React, { ReactElement } from 'react'
import { HR, UL, LI } from 'src/components/Elements'
import { H1 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex } from 'src/components/Grid'
import { Header as HeaderElement } from 'src/components/Elements'
import useSWR from 'swr'
import { GetSettingsQuery, MenuItem } from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { styled } from 'src/utils/Styled'
import { Box } from 'src/components/Box'
import { ScrollView } from 'react-native-gesture-handler'

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
        listStyle="none"
        mx={{ lg: 1, xl: 3 }}
        fontFamily="heading"
        textTransform="capitalize"
        fontSize={2}
      >
        {link.label}
      </LI>
    </UniversalLink>
  )
}

const Sticky = styled(Box)`
  position: ${(props) => (props.sticky ? 'fixed' : 'relative')};
  top: 40px;
  padding: 5px;
  background-color: #bbbbbb;
  border-bottom: black solid 1px;
  transition: top 0.2s ease-out;
`
const HeaderWrapper = styled(HeaderElement)`
  position: relative;
  height: 3rem;

  .sticky {
    position: ${(props) => (props.sticky ? 'fixed' : 'relative')};
    top: 40px;
    padding: 5px;
    background-color: #bbbbbb;
    border-bottom: black solid 1px;
    transition: top 0.2s ease-out;
  }
`

interface HeaderProps {
  initialSettingsData?: GetSettingsQuery
  sticky: boolean
  ref: any
}

export function Header({
  initialSettingsData,
  sticky,
  ref,
}: HeaderProps): ReactElement {
  const { data }: { data?: GetSettingsQuery } = useSWR(getSettings, {
    initialData: initialSettingsData,
  })

  return (
    <Box ref={ref}>
      <HeaderWrapper className={sticky ? sticky : ''}>
        <Flex justifyContent="center" mx="auto">
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
          <HR width="full" height="2px" />
        </Flex>
        <Flex width="full">
          <UL display="flex" flexWrap="wrap" flexDirection="row">
            {data?.menus?.nodes[0].menuItems?.nodes.map(
              (link, i: React.ReactText) =>
                link && (
                  //@ts-ignore
                  <MenuLink link={link} key={i} />
                ),
            )}
          </UL>
          <HR width="full" height="1px" bg="gray.1" />
        </Flex>
      </HeaderWrapper>
    </Box>
  )
}
