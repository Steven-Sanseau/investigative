import { Query } from '@apollo/react-components'
import gql from 'graphql-tag'
import React from 'react'
import { Box } from 'src/components/Box'
import { HR, UL, LI } from 'src/components/Elements'
import { Caps, H1, H4 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex, Row, Column } from 'src/components/Grid'
import { Header as HeaderWrapper } from 'src/components/Elements'
import { styled } from 'src/utils/Styled'

const SETTINGS = gql`
  query HEADER {
    settings: generalSettings {
      title
    }
    menus: menus(where: { slug: "header_links" }) {
      nodes {
        id
        name
        menuItems {
          nodes {
            label
            url
            linkRelationship
            id
            connectedObject {
              ... on Category {
                slug
                categoryId
              }
              ... on MenuItem {
                id
                label
                url
              }
              ... on Page {
                slug
                title(format: RENDERED)
              }
            }
          }
        }
      }
    }
  }
`

const MenuLink = ({
  link,
}: {
  link: {
    label?: string
    connectedObject: {
      url?: string
      categoryId?: string
      id?: string
      slug?: string
    }
  }
}): JSX.Element => {
  let routeName
  let uri
  if (!!link?.connectedObject?.id) {
    routeName = 'page'
    uri = link.connectedObject.url
      .replace('https://', '')
      .replace('http://', '')
  }
  if (!!link?.connectedObject?.categoryId) {
    routeName = 'category'
    uri = link.connectedObject.slug
  }
  return (
    <UniversalLink
      routeName={routeName}
      params={{ uri }}
      web={{
        path: `${routeName}/[uri]`,
        as: `/${routeName}/${uri}`,
      }}
    >
      <LI
        listStyle="none"
        mx={{ lg: 1, xl: 3 }}
        fontFamily="headingMedium"
        textTransform="capitalize"
        fontSize={2}
      >
        {link.label}
      </LI>
    </UniversalLink>
  )
}

export function Header() {
  return (
    <Query query={SETTINGS}>
      {({ data, loading }) => (
        <HeaderWrapper display="flex">
          <Flex justifyContent="center" mx="auto">
            <UniversalLink
              routeName="home"
              web={{
                path: ``,
              }}
            >
              <H1>{data?.settings.title}</H1>
            </UniversalLink>
          </Flex>
          <Flex>
            <HR width="full" height="2px" />
          </Flex>
          <Flex width="full">
            <UL display="flex" flexWrap="wrap" flexDirection="row">
              {data?.menus?.nodes[0].menuItems?.nodes.map(
                (link: any, i: React.ReactText) =>
                  link && <MenuLink link={link} key={i} />,
              )}
            </UL>
            <HR width="full" height="1px" bg="gray.1" />
          </Flex>
        </HeaderWrapper>
      )}
    </Query>
  )
}
