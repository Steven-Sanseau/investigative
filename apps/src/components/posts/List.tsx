import { formatRelative, parseISO } from 'date-fns'
import React from 'react'
import { Box } from 'src/components/Box'
import { Image } from 'src/components/Image'
import { Text } from 'src/components/Text'
import { H2, P } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import styled from 'styled-components/native'
import useSWR from 'swr'
import { fetcher } from 'src/utils/Fetcher'
import { GetPostsQuery } from 'src/generated/graphql'
import { Flex } from 'src/components/Grid'

const Title = styled(H2)`
  text-transform: capitalize;
`
const Author = styled(Text).attrs({
  fontFamily: 'heading',
  fontWeight: 'bold',
  fontSize: '0',
})``

interface PropsPostList {
  initialPostsData?: GetPostsQuery
}

const DatePost = styled(Text)``

export const PostList: React.FC<PropsPostList> = ({
  initialPostsData,
}: PropsPostList) => {
  const now = new Date()
  const { data }: { data?: GetPostsQuery } = useSWR(
    'getPosts',
    (query) => fetcher(query),
    {
      initialData: initialPostsData || null,
    },
  )

  return (
    <Flex>
      {data?.posts.edges.map(({ node: post }, i) => (
        <Box width="full" key={i}>
          <Flex flexWrap="wrap" flexDirection="row" justifyContent="flex-end">
            {post.featuredImage && (
              <Box width={{ xs: 'full', lg: '1/3' }} overflow="hidden">
                <Image
                  mx={{ xs: 'auto', md: 0 }}
                  height={{ xs: '143px', lg: '185px', xl: '185px' }}
                  width={{ xs: '200px', lg: '260px', xl: '260px' }}
                  loading="lazy"
                  resizeMode="contain"
                  source={{ uri: post.featuredImage.sourceUrl }}
                />
              </Box>
            )}
            <Box
              width={{ xs: 'full', lg: post?.featuredImage ? '2/3' : 'full' }}
            >
              <Flex alignItems="flex-start">
                <UniversalLink
                  key={i}
                  routeName={`post`}
                  params={{ slug: post.slug }}
                  web={{
                    path: `post/[slug]`,
                    as: `post/${post.slug}`,
                  }}
                  as={Box}
                >
                  <Title>{post.title}</Title>
                </UniversalLink>
                <Box flexDirection="row" alignItems="baseline">
                  <Author>by {post.author.name}</Author>
                  {post?.date && (
                    <DatePost>
                      {formatRelative(parseISO(post.date), now)}
                    </DatePost>
                  )}
                  <Text>{post.commentCount}</Text>
                </Box>
                <Box>
                  <P textAlign="justify">{post.excerpt}</P>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}
