import React from 'react'
import { RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useSWR, { mutate } from 'swr'
import { getPosts } from 'src/api/ghost'
import { H2, H3, P } from 'src/components/Typography'
import { Layout } from 'src/components/Layout'
import { CardPost } from 'src/components/Post/List'
import UniversalLink from 'src/components/UniversalLink'
import { Image } from 'src/components/Image'

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export function Home({ initialData = null }) {
  const [refreshing, setRefreshing] = React.useState(false)
  const [lastRefreshingDate, setLastRefreshingDate] = React.useState(
    new Date().toDateString(),
  )

  const { data: posts } = useSWR(`posts`, getPosts, { initialData })

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    mutate('posts').then(() =>
      wait(200).then(() => {
        setRefreshing(false)
        setLastRefreshingDate(new Date().toDateString())
      }),
    )
  }, [refreshing])

  return (
    <Layout>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title={lastRefreshingDate}
          />
        }
      >
        {posts &&
          posts.map((post, i) => (
            <UniversalLink
              key={i}
              routeName="post"
              params={{ slug: post.slug }}
              web={{
                path: `post/${post.slug}`,
                as: `post/${post.slug}`,
              }}
              as={CardPost}
            >
              {post.feature_image && (
                <Image
                  height={{ xs: '100px', lg: '200px', xl: '220px' }}
                  width={{ xs: '100px', lg: '200px', xl: '220px' }}
                  loading="lazy"
                  resizeMode="contain"
                  source={{ uri: post.feature_image }}
                />
              )}
              <H2>{post.title.toUpperCase()}</H2>
              <H3>{post.primary_author?.name}</H3>
              <H3>{post.primary_tag?.name}</H3>
              <P>{post.excerpt}</P>
            </UniversalLink>
          ))}
      </ScrollView>
    </Layout>
  )
}
