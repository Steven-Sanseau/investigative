import React from 'react'
import { PostList } from 'src/components/posts/List'
import { CollapsibleHeader } from 'src/components/ScrollHeader'
import { Flex } from 'src/components/Grid'
import { Sidebar } from 'src/components/Sidebar'
import { Box } from 'src/components/primitives/Box'
import { Main, Aside } from 'src/components/Elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GrowlMessage } from 'src/components/Growl'
import { FeaturedPost } from 'src/components/posts/FeaturedPost'
import { RefreshControl } from 'react-native'
import { mutate } from 'swr'
import { wait } from 'src/utils/Fetcher'
import { useGrowl } from 'src/contexts/Growl'
import { useT } from 'src/contexts/I18n'
import { getPosts } from 'src/graphql/posts'

export const Home: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false)
  const [lastRefreshingDate, setLastRefreshingDate] = React.useState(
    new Date().toDateString(),
  )
  const growl = useGrowl()
  const t = useT()
  const paginationParams = React.useMemo(() => ({ after: null }), [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    mutate([getPosts, paginationParams]).then(() => {
      growl.success(t('growl.message.refreshPost'))
      return wait(200).then(() => {
        setRefreshing(false)
        setLastRefreshingDate(new Date().toDateString())
      })
    })
  }, [])
  return (
    <CollapsibleHeader
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title={lastRefreshingDate}
        />
      }
    >
      <SafeAreaView>
        <GrowlMessage />
        <Main>
          <FeaturedPost />
          <PostList />
        </Main>
      </SafeAreaView>
    </CollapsibleHeader>
  )
}
