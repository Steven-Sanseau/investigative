import React from 'react'
import { HR, UL, LI } from 'src/components/Elements'
import { H1 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex } from 'src/components/Grid'
import { Header as HeaderWrapper } from 'src/components/Elements'
import useSWR from 'swr'
import { fetcher } from 'src/utils/Fetcher'
import { GetSettingsQuery, MenuItem } from 'src/generated/graphql'

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

export function Header({
  initialHeaderData,
}: {
  initialHeaderData?: any
}): JSX.Element {
  const { data }: { data?: GetSettingsQuery } = useSWR(
    'getSettings',
    (query) => fetcher(query),
    {
      initialData: initialHeaderData,
    },
  )

  return (
    <HeaderWrapper display="flex">
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
  )
}
