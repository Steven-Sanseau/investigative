import { useRouting } from 'expo-next-react-navigation'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Text } from 'src/components/primitives/Text'
import { Author } from 'src/containers/Author'
import {
  GetAuthorBySlugQuery,
  GetAuthorsQuery,
  GetPostsByAuthorQuery,
} from 'src/generated/graphql'
import { getPostsByAuthorId } from 'src/graphql/post'
import { getAuthorBySlug, getAuthors } from 'src/graphql/user'
import { fetcher } from 'src/utils/Fetcher'
import useSWR from 'swr'

interface PageAuthorProps {
  initialAuthorsData?: GetAuthorsQuery
  initialAuthorData?: GetAuthorBySlugQuery
  initialPostsByAuthorData?: GetPostsByAuthorQuery
}

type RouteParams = { slug: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetAuthorsQuery = await fetcher(getAuthors)

  const paths = data.users.nodes.map((user) => ({
    params: {
      slug: user.slug,
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
  const initialAuthorData: GetAuthorBySlugQuery = await fetcher(
    getAuthorBySlug,
    {
      slug: params.slug,
    },
  )

  const initialPostsByAuthorData: GetPostsByAuthorQuery = await fetcher(
    getPostsByAuthorId,
    { after: 'null', id: initialAuthorData?.user?.userId },
  )

  return { props: { initialAuthorData, initialPostsByAuthorData } }
}

const AuthorPage: React.FC<PageAuthorProps> = ({
  initialAuthorData,
  initialPostsByAuthorData,
}: PageAuthorProps) => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')

  const authorSlugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetAuthorBySlugQuery } = useSWR(
    [getAuthorBySlug, authorSlugParams],
    { initialData: initialAuthorData },
  )

  if (!data) {
    return <Text>{JSON.stringify(authorSlugParams).toString()}...</Text>
  }

  return (
    <Author initialPostsAuthorData={initialPostsByAuthorData} data={data} />
  )
}

export default AuthorPage
