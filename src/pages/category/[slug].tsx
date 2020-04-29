import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { fetcher } from 'src/utils/Fetcher'
import useSWR from 'swr'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  GetCategoriesQuery,
  GetCategoryBySlugQuery,
  GetPostsByAuthorQuery,
  GetPostsByCategoryIdQuery,
} from 'src/generated/graphql'

import { getCategories, getCategoryBySlug } from 'src/graphql/category'
import { Category } from '../../containers/Category'
import { getPostsByAuthorId } from '../../graphql/post'
import { ActivityIndicator } from 'react-native'

interface CategoryPageProps {
  initialPostsByCategoryData?: GetPostsByCategoryIdQuery
  initialCategoryData?: GetCategoryBySlugQuery
}

type RouteParams = { slug: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetCategoriesQuery = await fetcher(getCategories)
  const paths = data.categories.nodes.map((category) => ({
    params: {
      slug: category.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, RouteParams> = async ({
  params,
}) => {
  const initialCategoryData: GetCategoryBySlugQuery = await fetcher(
    getCategoryBySlug,
    {
      slug: params.slug,
    },
  )
  const initialPostsByCategoryData: GetPostsByAuthorQuery = await fetcher(
    getPostsByAuthorId,
    { after: 'null', id: initialCategoryData?.category?.databaseId },
  )
  return { props: { initialCategoryData, initialPostsByCategoryData } }
}

const PageCategory: React.FC<CategoryPageProps> = ({
  initialCategoryData,
  initialPostsByCategoryData,
}: CategoryPageProps) => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')

  const categorySlugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetCategoryBySlugQuery } = useSWR(
    [getCategoryBySlug, categorySlugParams],
    { initialData: initialCategoryData },
  )

  if (!data) {
    return <ActivityIndicator />
  }

  return (
    <>
      <Category data={data} initialPostsData={initialPostsByCategoryData} />
    </>
  )
}

export default PageCategory
