import { formatRelative, parseISO } from 'date-fns'
import React, { ReactElement } from 'react'
import { Box } from 'src/components/primitives/Box'
import { Image } from 'src/components/primitives/Image'
import { Text } from 'src/components/primitives/Text'
import { H2, P } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import useSWR from 'swr'

import { GetPostsQuery } from 'src/generated/graphql'
import { Flex } from 'src/components/Grid'
import { getPosts } from 'src/graphql/posts'
import { RenderBlocks } from 'src/components/post/Blocks'

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

interface PropsPostList {
  initialPostsData?: GetPostsQuery
}

const DatePost = Text

export const PostList: React.FC<PropsPostList> = ({
  initialPostsData,
}: PropsPostList) => {
  const now = new Date()
  const { data }: { data?: GetPostsQuery } = useSWR(getPosts, {
    initialData: initialPostsData || null,
  })
  return (
    <Flex>
      {data?.posts?.edges.map(({ node: post }, i) => (
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
                sx={{ width: { xs: 'full', lg: '1/3' }, overflow: 'hidden' }}
              >
                <Image
                  alt={post.image.altText && post.image.caption}
                  sx={{
                    mx: { xs: 'auto', md: 0 },
                    height: { xs: 143, lg: 185, xl: 185 },
                    width: { xs: 'full', lg: 260, xl: 260 },
                  }}
                  thumbnail={post.thumbnail.sourceUrl}
                  src={post.image.sourceUrl}
                />
              </Box>
            )}
            <Box
              sx={{
                width: { xs: 'full', lg: post?.image ? '2/3' : 'full' },
              }}
            >
              <Flex sx={{ alignItems: 'flex-start' }}>
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
                <Box sx={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Author>by {post.author.name}</Author>
                  {post?.date && (
                    <DatePost>
                      {formatRelative(parseISO(post.date), now)}
                    </DatePost>
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
      ))}
    </Flex>
  )
}
