import { Query } from '@apollo/react-components'
import gql from 'graphql-tag'
import React from 'react'
import { Box } from 'src/components/Box'
import { HR } from 'src/components/Elements'
import { Layout } from 'src/components/Layout'
import { Caps, H1, H4 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'

const SETTINGS = gql`
  query POSTS {
    settings: generalSettings {
      title
    }
    pages: pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export function Header() {
  return (
    <Query query={SETTINGS}>
      {({ data, loading }) => (
        <Box width="full" heigth={1}>
          <Box display="flex" flexDirection="row" justifyContent="flex-start">
            <Layout mx="auto" width="960">
              <Box mx="auto">
                <UniversalLink
                  routeName="home"
                  web={{
                    path: ``,
                  }}
                >
                  <H1>{data?.settings.title}</H1>
                </UniversalLink>
              </Box>
              <HR width="full" height="1" />
              <Box my={2}>
                {data?.pages?.edges?.map(({ node: page }, i) => (
                  <UniversalLink
                    key={i}
                    routeName="page"
                    params={{ uri: page.uri }}
                    web={{
                      path: `/page/[uri]`,
                      as: `/page/${page.uri}`,
                    }}
                  >
                    <H4>
                      <Caps>{page.title}</Caps>
                    </H4>
                  </UniversalLink>
                ))}
              </Box>
            </Layout>
          </Box>
        </Box>
      )}
    </Query>
  )
}
