import React from 'react'
import { Query } from '@apollo/react-components'
import { Home } from 'src/containers/Home'
import { gql } from '@apollo/client'
import { withApollo } from 'src/apollo/client'
import { Layout } from 'src/components/Layout'

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
  return (
    <Query query={SETTINGS}>
      {({ data }) => (
        <Layout bg="white">
          <Home />
        </Layout>
      )}
    </Query>
  )
}

export default withApollo(Index)
