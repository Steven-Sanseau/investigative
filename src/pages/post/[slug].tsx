import { useRouting } from 'expo-next-react-navigation'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RenderBlocks } from 'src/components/post/Blocks'
import useSWR from 'swr'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { getPostBySlug } from 'src/graphql/post'
import { Box } from 'src/components/primitives/Box'

const Post: React.FC = () => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')

  const slugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetPostBySlugQuery } = useSWR([
    getPostBySlug,
    slugParams,
  ])

  return (
    <>
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
    </>
  )
}

export default Post
