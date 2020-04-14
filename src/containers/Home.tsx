import React from 'react'
import { PostList } from 'src/components/posts/List'
import { Flex } from 'src/components/Grid'
import { Main, Aside } from 'src/components/Elements'
import { Sidebar } from 'src/components/Sidebar'
import { Box } from 'src/components/Box'
import { GetPostsQuery } from 'src/generated/graphql'

interface PropsHome {
  initialPostsData?: GetPostsQuery
}
export const Home: React.FC<PropsHome> = ({ initialPostsData }: PropsHome) => {
  return (
    <>
      <Box>
        <Flex flexDirection={{ xs: 'column', md: 'row' }}>
          <Box
            width={{
              xs: 'full',
              sm: 'full',
              md: '2/3',
              lg: '3/4',
              xl: '2/3',
            }}
          >
            <Main>
              <PostList initialPostsData={initialPostsData} />
            </Main>
          </Box>
          <Box
            width={{
              xs: 'full',
              sm: 'full',
              md: '1/3',
              lg: '1/4',
              xl: '1/3',
            }}
          >
            <Aside>
              <Sidebar />
            </Aside>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
