import { Query } from '@apollo/react-components'
import gql from 'graphql-tag'
import React from 'react'
import { Image } from 'src/components/Image'
import { H3, Caps } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import styled from 'styled-components/native'
import { Text } from 'src/components/Text'
import { formatRelative, parseISO } from 'date-fns'
import { Box } from 'src/components/Box'
import { Flex, Row, Column } from 'src/components/Grid'

export const CardPost = styled.View`
  flex: 1;
`

const POSTS = gql`
  query Posts {
    posts: posts {
      edges {
        node {
          id
          title(format: RENDERED)
          slug
          author {
            name
          }
          date
        }
      }
    }
  }
`

const Title = styled(H3).attrs({ fontFamily: 'heading', fontSize: '4' })`
  text-transform: capitalize;
`
const Author = styled(Text).attrs({
  fontFamily: 'headingMedium',
  fontSize: '0',
})``

const DatePost = styled(Text)``

export function PostList(): JSX.Element {
  const now = new Date()

  return (
    <Query query={POSTS}>
      {({ data }) => (
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
      )}
    </Query>
  )
}
