import React from 'react'

import { useRouting } from 'expo-next-react-navigation'
import { Text } from 'src/components/Text'
import { gql } from '@apollo/client'
import { Query } from '@apollo/react-components'
import { Header } from 'src/components/Header'
import { withApollo } from 'src/apollo/client'
import { ArticleJsonLd } from 'next-seo'
import HTML from 'react-native-render-html'
import { ScrollView, RefreshControl, Dimensions } from 'react-native'

const POST = gql`
  query GET_POST($uri: String) {
    postBy(uri: $uri) {
      id
      title(format: RENDERED)
      date
      author {
        avatar {
          url
        }
        uri
        name
      }
      content(format: RENDERED)
      modified
      uri
      status
      commentStatus
    }
  }
`

function Post() {
  const { getParam } = useRouting()
  const uri: string = getParam('uri')
  const [refreshing, setRefreshing] = React.useState(false)
  const [lastRefreshingDate, setLastRefreshingDate] = React.useState(
    new Date().toDateString(),
  )

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    // mutate('posts').then(() =>
    //   wait(200).then(() => {
    //     setRefreshing(false)
    //     setLastRefreshingDate(new Date().toDateString())
    //   }),
    // )
  }, [])

  return (
    <>
      <Header />
      <Query query={POST} variables={{ uri }}>
        {({ data }) => (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                title={lastRefreshingDate}
              />
            }
          >
            <ArticleJsonLd
              url="https://example.com/article"
              title="Article headline"
              images={[
                'https://example.com/photos/1x1/photo.jpg',
                'https://example.com/photos/4x3/photo.jpg',
                'https://example.com/photos/16x9/photo.jpg',
              ]}
              datePublished="2015-02-05T08:00:00+08:00"
              dateModified="2015-02-05T09:00:00+08:00"
              authorName="Jane Blogs"
              publisherName="Gary Meehan"
              publisherLogo="https://www.example.com/photos/logo.jpg"
              description="This is a mighty good description of this article."
            />

            <HTML
              html={data?.postBy?.content}
              imagesMaxWidth={Dimensions.get('window').width}
            />
          </ScrollView>
        )}
      </Query>
    </>
  )
}

export default withApollo(Post)
