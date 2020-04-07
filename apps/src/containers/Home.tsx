import React from 'react'
import { Header } from 'src/components/Header'
import { PostList } from 'src/components/posts/List'
import { TopBar } from 'src/components/TopBar'
import { Footer } from 'src/components/Footer'
import { Layout } from 'src/components/Layout'
import { Flex, Row, Column } from 'src/components/Grid'
import { Main, Aside } from 'src/components/Elements'
import { Sidebar } from 'src/components/Sidebar'
import { Box } from 'src/components/Box'

export function Home() {
  return (
    <>
      <TopBar />
      <Layout>
        <Header />
        <Box overflow="hidden">
          <Flex flexDirection="row">
            <Main width={{ xs: 'full', lg: '9/12' }}>
              <PostList />
            </Main>
            <Aside width={{ xs: 'full', md: '3/12' }}>
              <Sidebar />
            </Aside>
          </Flex>
        </Box>
      </Layout>
      <Footer />
    </>
  )
}
