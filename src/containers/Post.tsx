// import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RenderBlocks } from 'src/components/post/Blocks'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { H1, H5 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { FeaturedImage } from 'src/components/post/FeaturedImage'
import { Comments } from '../components/post/Comments'
import { useRouting } from 'expo-next-react-navigation'
import { CommentForm } from '../components/post/CommentForm'
import { PostHat } from 'src/components/PostHat'

interface PostProps {
  data: GetPostBySlugQuery
}

export const Post: React.FC<PostProps> = ({ data }: PostProps) => {
  const { getParam } = useRouting()
  const showComment: boolean = getParam('comment')
  return (
    <>
      {/* {data.post && (
        <ArticleJsonLd


          title={data.post.title}
          datePublished={data.post.date}
          dateModified={data.post.modified}
          authorName={data.post.author.name}
          publisherName={data.post.author.name}
          publisherLogo={data.post.author.avatar.url}
          description={data.post.excerpt}
        />
      )} */}

      <FeaturedImage
        src={data.post.featuredImage?.sourceUrl}
        alt={data.post.featuredImage?.altText}
      >
        <Box sx={{ mx: 'auto' }}>
          <Box>
            <H1 sx={{ color: 'white' }}>{data.post.title}</H1>
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
              <H5 sx={{ color: 'white' }}>{data.post.author.name}</H5>
            </UniversalLink>
          </Box>
          <Box>
            <H5 sx={{ color: 'white' }}>{data.post.date}</H5>
          </Box>
        </Box>
      </FeaturedImage>
      <Text sx={{}}>{data.post.featuredImage?.caption}</Text>
      <Box
        sx={{
          width: { xs: '11/12', md: '7/12', xl: '1/2' },
          mx: 'auto',
        }}
      >
        <PostHat data={data} />
        <RenderBlocks content={data.post.content} />
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0 }}>
        <Text>{data.post.commentCount}</Text>
      </Box>
      <UniversalLink
        routeName="post"
        params={{ comment: true, slug: data.post.slug, shallow: true }}
        web={{
          path: `/post/[slug]`,
          as: `/post/${data.post.slug}?comment=true`,
        }}
      >
        <Text>show Comments</Text>
      </UniversalLink>

      <CommentForm postId={data.post.databaseId} />
      {showComment && <Comments postId={data.post.databaseId} />}
    </>
  )
}
