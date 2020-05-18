import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import useSWR from 'swr'
import { GetPostBySlugQuery, GetPostsQuery } from 'src/generated/graphql'
import { getAllPosts, getPostBySlug } from 'src/graphql/post'
import { Text } from 'src/components/primitives/Text'
import { Post } from 'src/containers/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fetcher } from 'src/utils/Fetcher'

interface PostProps {
  initialPostData?: GetPostBySlugQuery
}

type RouteParams = { slug: string }

export const getStaticPaths: GetStaticPaths<RouteParams> = async () => {
  const data: GetPostsQuery = await fetcher(getAllPosts)
  const paths = data.posts.nodes.map((post) => ({
    params: {
      slug: post.slug,
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
  const initialPostData: GetPostBySlugQuery = await fetcher(getPostBySlug, {
    slug: params.slug,
  })

  // eslint-disable-next-line @typescript-eslint/camelcase
  return { props: { initialPostData, unstable_revalidate: 1 } }
}

const PostPage: React.FC<PostProps> = ({ initialPostData }: PostProps) => {
  const { getParam } = useRouting()
  const slug: string = getParam('slug')
  const slugParams = React.useMemo(() => ({ slug }), [slug])

  const { data }: { data?: GetPostBySlugQuery } = useSWR(
    [getPostBySlug, slugParams],
    { initialData: initialPostData },
  )

  if (!data?.post) {
    return <Text>loading...</Text>
  }

  return <Post data={data} />
}

export default PostPage
