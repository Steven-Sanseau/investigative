import React from 'react'
import { RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import useSWR, { mutate } from 'swr'
import { getPosts } from 'src/api/ghost'
import { Text } from 'src/components/Text'
// import Link from 'src/components/Link'
import { Link } from 'expo-next-react-navigation'

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

  const { data: post } = useSWR(`posts`, getPosts, { initialData })

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    mutate('posts').then(() =>
      wait(200).then(() => {
        setRefreshing(false)
        setLastRefreshingDate(new Date().toDateString())
      }),
    )
  }, [refreshing])
  // const { navigate } = useRouting()

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title={lastRefreshingDate}
          />
        }
      >
        {post &&
          post.map((postss, i) => (
            <Link
              key={i}
              routeName="post"
              params={{ slug: postss.slug }}
              web={{ path: `post/${postss.slug}`, as: `post/${postss.slug}` }}
            >
              <Text
                fontFamily="heading"
                fontSize={{ xs: 3, lg: 4, xl: 5 }}
                color="secondary"
              >
                {postss.title.toUpperCase()}
              </Text>
            </Link>
          ))}
      </ScrollView>
    </>
  )
}
