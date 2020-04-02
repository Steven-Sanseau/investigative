import { Query } from '@apollo/react-components'
import gql from 'graphql-tag'
import React from 'react'
import { Image } from 'src/components/Image'
import { H3 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import styled from 'styled-components/native'

export const CardPost = styled.View`
  flex: 1;
`

const POSTS = gql`
  {
    posts: posts {
      edges {
        node {
          id
          title(format: RENDERED)
          date
          author {
            avatar {
              url
            }
            uri
            name
          }
          content(format: RENDERED)
          modified
          uri
          status
          tags {
            nodes {
              name
              uri
            }
          }
          excerpt(format: RENDERED)
          commentStatus
        }
      }
    }
  }
`

export function PostList(): JSX.Element {
  return (
    <Query query={POSTS} fetchPolicy="cache-and-network">
      {({ data }) => (
        <>
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
                params={{ uri: post.uri }}
                web={{
                  path: `post/[uri]`,
                  as: `post/${post.uri}`,
                }}
              >
                <H3>{post.title.toUpperCase()}</H3>
              </UniversalLink>
              <H3>{post.author.name}</H3>
              {post?.tags.nodes.map((tag, i) => (
                <H3 key={i}>{tag.name}</H3>
              ))}
            </>
          ))}
        </>
      )}
    </Query>
  )
}
