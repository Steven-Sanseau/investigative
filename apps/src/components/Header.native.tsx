import { Query } from '@apollo/react-components'
import gql from 'graphql-tag'
import React from 'react'
import { Box } from 'src/components/Box'
import { H1 } from 'src/components/Typography'
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
