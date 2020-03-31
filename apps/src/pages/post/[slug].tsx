import React from 'react'

import { useRouting } from 'expo-next-react-navigation'
import { Text } from 'src/components/Text'
import { gql } from '@apollo/client'
import { Query } from '@apollo/react-components'
import { Header } from 'src/components/Header'
import { withApollo } from 'src/apollo/client'

const POST = gql`
  query GET_POST($uri: String) {
    postBy(uri: $uri) {
      id
      postId
      title
      date
      uri
    }
  }
`

function Post() {
  const { getParam } = useRouting()
  const uri: string = getParam('uri')
  return (
    <>
      <Header />
      <Query query={POST} variables={{ uri }}>
        {({ data }) => <Text>charger</Text>}
      </Query>
    </>
  )
}

export default withApollo(Post)
