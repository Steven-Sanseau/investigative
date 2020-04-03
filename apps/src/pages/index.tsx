import { gql } from '@apollo/client'
import { Query } from '@apollo/react-components'
import React from 'react'
import { withApollo } from 'src/apollo/client'
import { Layout } from 'src/components/Layout'
import { Home } from 'src/containers/Home'

const SETTINGS = gql`
  {
    posts: posts {
      edges {
        node {
          slug
          title
        }
      }
    }

    tags: tags {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const Index = () => {
  return <Query query={SETTINGS}>{({ data }) => <Home />}</Query>
}

export default withApollo(Index)
