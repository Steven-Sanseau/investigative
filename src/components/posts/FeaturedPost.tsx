import React, { ReactElement } from 'react'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { GetFeaturedPostQuery } from 'src/generated/graphql'
import { getFeaturedPost } from 'src/graphql/post'
import useSWR from 'swr'
import { RenderBlocks } from 'src/components/post/Blocks'
import { Image } from 'src/components/primitives/Image'
import { UniversalLink } from 'src/components/UniversalLink'
import { Flex } from 'src/components/Grid'

interface FeaturedPostProps {
  initialFeaturedPostData?: GetFeaturedPostQuery
}
export function FeaturedPost({
  initialFeaturedPostData,
}: FeaturedPostProps): ReactElement {
  const { data }: { data?: GetFeaturedPostQuery } = useSWR(getFeaturedPost, {
    initialData: initialFeaturedPostData,
  })

  if (!data) {
    return <></>
  }

  const post = data.featuredPost.nodes[0]

  return (
    <Flex
      sx={{
        width: 'full',
        height: '400hpx',
        justifyContent: 'flex-end',
      }}
    >
      <Image
        source={{ uri: post.image.sourceUrl }}
        alt={post.image.altText}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'full',
          height: '400hpx',
          zIndex: 0,
        }}
      />
      <Box>
        <UniversalLink
          routeName={`post`}
          params={{
            slug: post.slug,
          }}
          web={{
            path: `post/[slug]`,
            as: `post/${post.slug}`,
          }}
          as={Text}
          style={{ zIndex: 10 }}
        >
          <Text
            sx={{
              fontFamily: 'heading',
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 6,
              zIndex: 10,
              color: 'white',
            }}
          >
            {post.title}
          </Text>
        </UniversalLink>
        <Text sx={{ fontFamily: 'serif', fontSize: 3, color: 'white' }}>
          <RenderBlocks content={post.excerpt} />
        </Text>
        <Text sx={{ fontFamily: 'serif', fontSize: 3, color: 'white' }}>
          {post.author.name}
        </Text>
      </Box>
    </Flex>
  )
}
