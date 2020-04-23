import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { RenderBlocks } from 'src/components/post/Blocks'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'
import { fetcher } from 'src/utils/Fetcher'
import useSWR from 'swr'
import { GetStaticPaths, GetStaticProps } from 'next'

import { GetAuthorsQuery, GetAuthorBySlugQuery } from 'src/generated/graphql'
import { getAuthors, getAuthorBySlug } from 'src/graphql/user'

interface PageAuthorProps {
  initialAuthorsData?: GetAuthorsQuery
  initialAuthorData?: GetAuthorBySlugQuery
}

type RouteParams = { slug: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetAuthorsQuery = await fetcher(getAuthors)
  const paths = data.users.edges.map(({ node: user }) => ({
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

  return { props: { initialAuthorData } }
}

const Author: React.FC<PageAuthorProps> = ({
  initialAuthorData,
}: PageAuthorProps) => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')

  const authorSlugParams = React.useMemo(() => ({ slug }), [slug])
  console.log('authorSlugParams', authorSlugParams)
  const { data }: { data?: GetAuthorBySlugQuery } = useSWR(
    [getAuthorBySlug, authorSlugParams],
    { initialData: initialAuthorData },
  )

  if (!data) {
    return <Text>{JSON.stringify(authorSlugParams).toString()}...</Text>
  }

  return (
    <>
      <Text sx={{ fontSize: 6, fontFamily: 'heading', mx: 'auto' }}>
        {data?.user.name}
      </Text>
      <Box sx={{ width: { xs: '11/12', md: '7/12', xl: '1/2' }, mx: 'auto' }}>
        <RenderBlocks content={data?.user?.description} />
      </Box>
      {/* <PostList></PostList> */}
    </>
  )
}

export default Author
