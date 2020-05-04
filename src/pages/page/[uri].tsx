import { useRouting } from 'expo-next-react-navigation'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { GetPageByUriQuery, GetPagesQuery } from 'src/generated/graphql'
import { getPageByUri, getPages } from 'src/graphql/page'
import { fetcher } from 'src/utils/Fetcher'
import useSWR from 'swr'
import { Page } from 'src/containers/Page'

interface PageProps {
  initialPagesData?: GetPagesQuery
  initialPageData?: GetPageByUriQuery
}

type RouteParams = { uri: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetPagesQuery = await fetcher(getPages)
  const paths = data.pages.nodes.map((page) => ({
    params: {
      uri: page.uri,
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
  const initialPageData: GetPageByUriQuery = await fetcher(getPageByUri, {
    uri: params.uri,
  })
  const initialPagesData: GetPagesQuery = await fetcher(getPages, {
    after: null,
  })
  return { props: { initialPagesData, initialPageData } }
}

const PageArticle: React.FC<PageProps> = ({
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

  return <Page data={data} pagesList={pagesList} />
}

export default PageArticle
