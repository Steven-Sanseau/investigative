import React from 'react'
import { H1, H4, Caps } from 'src/components/Typography'
import { Box } from 'src/components/Box'
import { UniversalLink } from 'src/components/UniversalLink'
import { Layout } from 'src/components/Layout'
import { HR } from 'src/components/Elements'
import gql from 'graphql-tag'
import { Query } from '@apollo/react-components'

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
        <Box width="full">
          <Box display="flex" flexDirection="row" justifyContent="flex-start">
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
          </Box>
        </Box>
      )}
    </Query>
  )
}
