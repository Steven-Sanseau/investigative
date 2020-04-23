import { useRouting } from 'expo-next-react-navigation'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RenderBlocks } from 'src/components/post/Blocks'
import useSWR from 'swr'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { getPostBySlug } from 'src/graphql/post'
import { Box } from 'src/components/primitives/Box'
import { H1, H5, H2 } from 'src/components/Typography'
import { Text } from 'src/components/primitives/Text'
import { UniversalLink } from 'src/components/UniversalLink'

const Post: React.FC = () => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')
  console.log({ slug, params: getParam('screen') })
  const slugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetPostBySlugQuery } = useSWR([
    getPostBySlug,
    slugParams,
  ])

  if (!data) {
    return <Text>loading...</Text>
  }

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
      <Box>
        <H1>{data.post.title}</H1>
      </Box>

      <Box>
        <UniversalLink
          routeName="author"
          params={{ slug: data.post.author.slug }}
          web={{
            as: `/author/${data.post.author.slug}`,
            path: `/author/${data.post.author.slug}`,
          }}
        >
          <H5>{data.post.author.name}</H5>
        </UniversalLink>
      </Box>
      <Box>
        <H5>{data.post.date}</H5>
      </Box>
      <Box sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}>
        <RenderBlocks content={data?.post.content} />
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0 }}>
        <Text>{data?.post.commentCount}</Text>
      </Box>
    </>
  )
}

export default Post
