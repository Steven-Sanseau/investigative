import React from 'react'
import { RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { H2, H3, P } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { Image } from 'src/components/Image'
import { Header } from 'src/components/Header'
import { PostList } from 'src/components/Post/List'

function wait(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

export function Home(): JSX.Element {
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
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title={lastRefreshingDate}
          />
        }
      >
        <PostList />
      </ScrollView>
    </>
  )
}
