import React from 'react'
import { Main } from 'src/components/Elements'
import { Layout } from 'src/components/Layout'
import { PostList } from 'src/components/posts/List'
import { H1 } from 'src/components/Typography'
import {
  GetCategoryBySlugQuery,
  GetPostsByCategoryIdQuery,
} from 'src/generated/graphql'
import { getPostsByCategoryId } from 'src/graphql/post'

interface CategoryPageProps {
  data: GetCategoryBySlugQuery
  initialPostsData?: GetPostsByCategoryIdQuery
}

export const Category: React.FC<CategoryPageProps> = ({
  initialPostsData,
  data,
}: CategoryPageProps) => {
  return (
    <>
      <Main>
        <Layout>
          <H1>{data.category.name}</H1>
          <PostList
            initialData={initialPostsData}
            query={getPostsByCategoryId}
            params={{ id: data.category.databaseId }}
          />
        </Layout>
      </Main>
    </>
  )
}
