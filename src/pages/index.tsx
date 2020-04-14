import React from 'react'
import { Home } from 'src/containers/Home'

import { fetcher } from 'src/utils/Fetcher'
import { GetPostsQuery, GetSettingsQuery } from 'src/generated/graphql'

// export const getStaticPaths = async (): Promise<{
//   paths?: string[]
//   fallback: boolean
// }> => {
//   const data: GetPostsSlugQuery = await fetcher('getPostsSlug')
//   const slugs = data.posts.edges.map(({ node: post }) => `post/${post.slug}`)

//   return {
//     paths: [{ params: { slugs } }],
//     fallback: true,
//   }
// }

interface PropsIndex {
  initialPostsData?: GetPostsQuery
  initialSettingsData?: GetSettingsQuery
}

export const getStaticProps = async (): Promise<{ props: PropsIndex }> => {
  const initialSettingsData: GetSettingsQuery = await fetcher('getSettings')
  const initialPostsData: GetPostsQuery = await fetcher('getPosts')
  return { props: { initialPostsData, initialSettingsData } }
}

const Index: React.FC<PropsIndex> = (props: PropsIndex) => {
  return <Home initialPostsData={props?.initialPostsData} />
}

export default Index
