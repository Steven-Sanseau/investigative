import { useRouting } from 'expo-next-react-navigation'
import { ArticleJsonLd } from 'next-seo'
import React from 'react'
import { RenderBlocks } from 'src/components/post/Blocks'
import useSWR from 'swr'
import { GetPagesQuery, GetPageByUriQuery } from 'src/generated/graphql'
import { Box } from 'src/components/primitives/Box'
import { fetcher } from 'src/utils/Fetcher'
import { getPages } from 'src/graphql/pages'
import { getPageByUri } from 'src/graphql/page'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MenuList } from 'src/components/MenuList'
import { Text } from 'src/components/primitives/Text'

interface PageProps {
  initialPagesData?: GetPagesQuery
  initialPageData?: GetPageByUriQuery
}

type RouteParams = { pageId: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetPagesQuery = await fetcher(getPages)
  const paths = data.pages.edges.map(({ node: page }) => ({
    params: {
      uri: page.uri,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  { data: unknown },
  RouteParams
> = async ({ params }) => {
  const initialPageData: GetPageByUriQuery = await fetcher(getPageByUri, {
    uri: params.uri,
  })
  const initialPagesData: GetPagesQuery = await fetcher(getPages, {
    after: null,
  })
  console.log('initialPageData', initialPageData)
  return { props: { initialPagesData, initialPageData } }
}

const Page: React.FC<PageProps> = ({
  initialPagesData,
  initialPageData,
}: PageProps) => {
  const { getParam } = useRouting()
  const uri: string = getParam('uri')

  const pageIdParams = React.useMemo(() => ({ uri }), [uri])

  const { data: pagesList }: { pagesList?: GetPagesQuery } = useSWR(getPages, {
    initialData: initialPagesData,
  })
  const { data }: { data?: GetPageByUriQuery } = useSWR(
    [getPageByUri, pageIdParams],
    { initialData: initialPageData },
  )

  return (
    <>
      <Text sx={{ fontSize: 6, fontFamily: 'heading', mx: 'auto' }}>
        {data?.page.title}
      </Text>
      <MenuList selector="uri" type="page" data={pagesList?.pages.edges} />
      <Box sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}>
        <RenderBlocks content={data?.page?.content} />
      </Box>
    </>
  )
}

export default Page
