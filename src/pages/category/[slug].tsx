import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { fetcher } from 'src/utils/Fetcher'
import useSWR from 'swr'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  GetCategoriesQuery,
  GetCategoryBySlugQuery,
} from 'src/generated/graphql'

import { getCategoryBySlug, getCategories } from 'src/graphql/category'

interface CategoryPageProps {
  initialCategoriesData?: GetCategoriesQuery
  initialCategoryData?: GetCategoryBySlugQuery
}

type RouteParams = { slug: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetCategoriesQuery = await fetcher(getCategories)
  const paths = data.categories.edges.map(({ node: category }) => ({
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
  return { props: { initialCategoryData } }
}

const Page: React.FC<CategoryPageProps> = ({
  initialCategoryData,
}: CategoryPageProps) => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')

  const categorySlugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetCategoryBySlugQuery } = useSWR(
    [getCategoryBySlug, categorySlugParams],
    { initialData: initialCategoryData },
  )

  return (
    <>
      <Text sx={{ fontSize: 6, fontFamily: 'heading', mx: 'auto' }}>
        {data?.category?.name}
      </Text>
      <Box sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}>
        {/* <RenderBlocks content={data?.category?.name} /> */}
      </Box>
    </>
  )
}

export default Page
