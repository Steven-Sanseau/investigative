import { useRouting } from 'expo-next-react-navigation'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { RenderBlocks } from 'src/components/post/Blocks'
import useSWR from 'swr'
import { fetcher } from 'src/utils/Fetcher'
import { GetPostBySlugQuery } from 'src/generated/graphql'

function Post() {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')
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

  const { data }: { data?: GetPostBySlugQuery } = useSWR(
    ['getPostBySlug', slug],
    (query, slug) => fetcher(query, { slug }),
  )

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
        {data?.post?.blocks && <RenderBlocks blocks={data.post.blocks} />}
      </ScrollView>
    </>
  )
}

export default Post
