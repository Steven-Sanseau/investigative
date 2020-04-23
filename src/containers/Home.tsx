import React from 'react'
import { PostList } from 'src/components/posts/List'
import { Flex } from 'src/components/Grid'
import { Main } from 'src/components/Elements'
import { Box } from 'src/components/primitives/Box'
import { GetPostsQuery, GetFeaturedPostQuery } from 'src/generated/graphql'
import { FeaturedPost } from 'src/components/posts/FeaturedPost'
import { Layout } from 'src/components/Layout'

interface PropsHome {
  initialPostsData?: GetPostsQuery
  initialFeaturedPostData?: GetFeaturedPostQuery
}
export const Home: React.FC<PropsHome> = ({
  initialPostsData,
  initialFeaturedPostData,
}: PropsHome) => {
  return (
    <>
      <Box>
        <Main>
          <FeaturedPost initialFeaturedPostData={initialFeaturedPostData} />
          <Layout>
            <PostList initialPostsData={initialPostsData} />
          </Layout>
        </Main>
      </Box>
    </>
  )
}
