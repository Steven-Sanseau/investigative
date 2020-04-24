import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { RenderBlocks } from 'src/components/post/Blocks'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { H1, H5 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'
import { GetPostBySlugQuery } from 'src/generated/graphql'

interface PostProps {
  data: GetPostBySlugQuery
}

export const Post: React.FC<PostProps> = ({ data }: PostProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
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
        <Box
          sx={{
            width: { xs: '11/12', md: '7/12', xl: '1/2' },
            mx: 'auto',
          }}
        >
          <RenderBlocks content={data?.post.content} />
        </Box>
        <Box sx={{ position: 'absolute', bottom: 0 }}>
          <Text>{data?.post.commentCount}</Text>
        </Box>
      </SafeAreaView>
    </ScrollView>
  )
}
