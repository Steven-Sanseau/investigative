import { formatRelative, parseISO } from 'date-fns'
import React, { ReactElement } from 'react'
import { Flex } from 'src/components/Grid'
import { RenderBlocks } from 'src/components/post/Blocks'
import { LoadMore } from 'src/components/posts/LoadMore'
import { Box } from 'src/components/primitives/Box'
import { Image } from 'src/components/primitives/Image'
import { Text } from 'src/components/primitives/Text'
import { H2 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { GetPostsQuery } from 'src/generated/graphql'
import useSWR, { useSWRPages } from 'swr'

const Title = (props): ReactElement => (
  <H2
    sx={{
      textTransform: 'capitalize',
    }}
    {...props}
  />
)

const Author = (props): ReactElement => (
  <Text
    sx={{
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: '0',
    }}
    {...props}
  />
)

interface PostListProps {
  initialData?: any
  query: any
  params?: any
}
export const PostList = ({
  initialData,
  query,
  params,
}: PostListProps): ReactElement => {
  const now = new Date()

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    'index',
    ({ offset, withSWR }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const paginationParams = React.useMemo(
        () => ({ after: offset, ...params }),
        [offset],
      )

      const { data }: { data?: GetPostsQuery } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSWR([query, paginationParams], {
          initialData: offset ? null : initialData,
        }),
      )

      if (!data) {
        return <></>
      }

      return data.posts.edges.map(({ node: post }, i) => (
        <Box sx={{ width: 'full' }} key={i}>
          <Flex
            sx={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            {post.image && (
              <Box
                sx={{
                  width: {
                    xs: 'full',
                    lg: '1/3',
                  },
                  overflow: 'hidden',
                }}
              >
                <Image
                  alt={post.image.altText && post.image.caption}
                  sx={{
                    mx: {
                      xs: 'auto',
                      md: 0,
                    },
                    height: {
                      xs: 143,
                      lg: 185,
                      xl: 185,
                    },
                    width: {
                      xs: 'full',
                      lg: 260,
                      xl: 260,
                    },
                  }}
                  src={post.image.sourceUrl}
                />
              </Box>
            )}
            <Box
              sx={{
                width: {
                  xs: 'full',
                  lg: post?.image ? '2/3' : 'full',
                },
              }}
            >
              <Flex
                sx={{
                  alignItems: 'flex-start',
                }}
              >
                <UniversalLink
                  routeName={`post`}
                  params={{
                    slug: post.slug,
                  }}
                  web={{
                    path: `/post/[slug]`,
                    as: `/post/${post.slug}`,
                  }}
                  as={Box}
                >
                  <Title>{post.title}</Title>
                </UniversalLink>
                <Box
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}
                >
                  <UniversalLink
                    routeName="author"
                    params={{
                      slug: post.author.slug,
                      screen: 'post',
                    }}
                    web={{
                      path: `/author/[slug]`,
                      as: `/author/${post.author.slug}`,
                    }}
                    as={Box}
                  >
                    <Author>by {post.author.name}</Author>
                  </UniversalLink>
                  {post?.date && (
                    <Text>{formatRelative(parseISO(post.date), now)}</Text>
                  )}
                  <Text>{post.commentCount}</Text>
                </Box>
                <Box>
                  <RenderBlocks content={post.excerpt} />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))
    },
    ({ data }) => {
      return data?.posts.pageInfo.hasNextPage
        ? data.posts.pageInfo.endCursor
        : null
    },
    [],
  )

  return (
    <Flex>
      {pages}
      <LoadMore
        isReachingEnd={isReachingEnd}
        isLoadingMore={isLoadingMore}
        loadMore={loadMore}
      />
    </Flex>
  )
}
