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
import { T } from '../../contexts/I18n'
import { ActivityIndicator } from 'react-native'

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
      fontWeight: '600',
      fontSize: 1,
      color: 'grayDark',
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
      // const { search, id } = params || {}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const paginationParams = React.useMemo(
        () => ({ after: offset, ...params }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [offset, params],
      )

      const { data }: { data?: GetPostsQuery } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSWR([query, paginationParams], {
          initialData: offset ? null : initialData,
        }),
      )

      if (!data) {
        return null
      }

      if (!data.posts) {
        return (
          <Text>
            <T id="posts.noResult" />
          </Text>
        )
      }

      return data.posts?.nodes?.map((post, index) => (
        <Box
          sx={{
            width: {
              xs: 'full',
              sm: '11/12',
              md: '10/12',
              lg: '10/12',
              xl: 'full',
            },
            mx: 'auto',
          }}
          key={index.toString()}
        >
          <Box sx={{ mt: 5 }} />
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
                    },
                    height: {
                      xs: 300,
                      lg: 200,
                    },
                    width: 'full',
                  }}
                  source={{ uri: post.image.sourceUrl }}
                />
              </Box>
            )}
            <Box
              sx={{
                width: {
                  xs: 'full',
                  lg: post?.image ? '2/3' : '11/12',
                },
              }}
            >
              <Flex
                sx={{
                  alignItems: 'flex-start',
                  pl: 4,
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
                <Box sx={{ mt: 2 }} />
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
                    <Author>
                      <T
                        id="posts.author"
                        values={{ name: post.author.name }}
                      />
                    </Author>
                  </UniversalLink>

                  <Text
                    sx={{
                      ml: 2,
                      fontFamily: 'heading',
                      fontWeight: '400',
                      fontSize: 0,
                    }}
                  >
                    {formatRelative(parseISO(post.date), now)}
                  </Text>

                  <Text
                    sx={{
                      ml: 2,
                      fontFamily: 'heading',
                      fontWeight: '400',
                      fontSize: 0,
                    }}
                  >
                    {post.commentCount}
                  </Text>
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
      return data?.posts.pageInfo?.hasNextPage
        ? data.posts.pageInfo.endCursor
        : null
    },
    [params],
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
