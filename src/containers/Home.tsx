import React from 'react'
import { PostList } from 'src/components/posts/List'
import { Main } from 'src/components/Elements'
import { GetFeaturedPostQuery, GetPostsQuery } from 'src/generated/graphql'
import { FeaturedPost } from 'src/components/posts/FeaturedPost'
import { Layout } from 'src/components/Layout'
import { getPosts } from 'src/graphql/post'

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
      <Main>
        <FeaturedPost initialFeaturedPostData={initialFeaturedPostData} />
        <Layout>
          <PostList initialData={initialPostsData} query={getPosts} />
        </Layout>
      </Main>
    </>
  )
}
