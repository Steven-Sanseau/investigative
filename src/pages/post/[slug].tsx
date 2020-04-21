import { useRouting } from 'expo-next-react-navigation'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { RenderBlocks } from 'src/components/post/Blocks'
import useSWR, { mutate } from 'swr'
import { wait } from 'src/utils/Fetcher'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { getPostBySlug } from 'src/graphql/post'
import { useGrowl } from 'src/contexts/Growl'
import { GrowlMessage } from 'src/components/Growl'
import { useT } from 'src/contexts/I18n'
import { Box } from 'src/components/primitives/Box'

const Post: React.FC = () => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')
  const [refreshing, setRefreshing] = React.useState(false)
  const [lastRefreshingDate, setLastRefreshingDate] = React.useState(
    new Date().toDateString(),
  )
  const growl = useGrowl()
  const t = useT()

  const slugParams = React.useMemo(() => ({ slug }), [slug])
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    mutate([getPostBySlug, slugParams]).then(() => {
      growl.success(t('growl.message.refreshPost'))
      return wait(200).then(() => {
        setRefreshing(false)
        setLastRefreshingDate(new Date().toDateString())
      })
    })
  }, [slugParams, growl, t])

  const { data }: { data?: GetPostBySlugQuery } = useSWR([
    getPostBySlug,
    slugParams,
  ])

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
        <GrowlMessage />
        {data?.post && (
          <ArticleJsonLd
            title={data.post.title}
            datePublished={data.post.date}
            dateModified={data.post.modified}
            authorName={data.post.author.name}
            publisherName={data.post.author.name}
            publisherLogo={data.post.author.avatar.url}
            description={data.post.excerpt}
          />
        )}
        <Box sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}>
          <RenderBlocks content={data?.post.content} />
        </Box>
      </ScrollView>
    </>
  )
}

export default Post
