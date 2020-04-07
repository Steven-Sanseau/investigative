import { formatRelative, parseISO } from 'date-fns'
import { request } from 'graphql-request'
import React from 'react'
import { Box } from 'src/components/Box'
import { Image } from 'src/components/Image'
import { Text } from 'src/components/Text'
import { H3 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { API_URL } from 'src/config/config'
import styled from 'styled-components/native'
import useSWR from 'swr'
import { fetcher } from 'src/utils/Fetcher'

export const CardPost = styled.View`
  flex: 1;
`

const Title = styled(H3).attrs({ fontFamily: 'heading', fontSize: '4' })`
  text-transform: capitalize;
`
const Author = styled(Text).attrs({
  fontFamily: 'heading',
  fontWeight: 'bold',
  fontSize: '0',
})``

const DatePost = styled(Text)``

interface PropsPostList {
  initialPostsData?: any
}
export const PostList: React.FC<PropsPostList> = ({
  initialPostsData,
}: PropsPostList) => {
  const now = new Date()
  const { data, error } = useSWR('getPosts', (query) => fetcher(query), {
    initialData: initialPostsData || null,
  })

  if (error) return <Text>failed to load</Text>
  if (!data) return <Text>loading...</Text>

  return (
    <Box>
      {data?.posts.edges.map(({ node: post }, i) => (
        <>
          {post.feature_image && (
            <Image
              height={{ xs: '100px', lg: '200px', xl: '220px' }}
              width={{ xs: '100px', lg: '200px', xl: '220px' }}
              loading="lazy"
              resizeMode="contain"
              source={{ uri: post.feature_image }}
            />
          )}
          <UniversalLink
            key={i}
            routeName={`post`}
            params={{ slug: post.slug }}
            web={{
              path: `post/[slug]`,
              as: `post/${post.slug}`,
            }}
          >
            <Title>{post.title}</Title>
          </UniversalLink>

          <Author>by {post?.author?.name}</Author>

          {post?.date && (
            <DatePost>{formatRelative(parseISO(post.date), now)}</DatePost>
          )}
        </>
      ))}
    </Box>
  )
}
