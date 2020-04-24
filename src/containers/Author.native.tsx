import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Main } from 'src/components/Elements'
import { Layout } from 'src/components/Layout'
import { RenderBlocks } from 'src/components/post/Blocks'
import { PostList } from 'src/components/posts/List'
import { Box } from 'src/components/primitives/Box'
import { H1, H4 } from 'src/components/Typography'
import { T } from 'src/contexts/I18n'
import {
  GetAuthorBySlugQuery,
  GetPostsByAuthorQuery,
} from 'src/generated/graphql'
import { getPostsByAuthorId } from 'src/graphql/post'

interface PropsAuthor {
  initialPostsAuthorData?: GetPostsByAuthorQuery
  data: GetAuthorBySlugQuery
}
export const Author: React.FC<PropsAuthor> = ({
  initialPostsAuthorData,
  data,
}: PropsAuthor) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Main>
          <H1>{data.user.name}</H1>
          <Box
            sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}
          >
            <RenderBlocks content={data.user.description} />
          </Box>
          <H4>
            <T
              id="author.postList.writtenBy"
              values={{ name: data.user.name }}
            />
          </H4>
          <PostList
            initialData={initialPostsAuthorData}
            query={getPostsByAuthorId}
            params={{ id: data.user.userId }}
          />
        </Main>
      </ScrollView>
    </SafeAreaView>
  )
}
