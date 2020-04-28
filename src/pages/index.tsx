import React from 'react'
import { Home } from 'src/containers/Home'
import {
  GetFeaturedPostQuery,
  GetPostsQuery,
  GetSettingsQuery,
} from 'src/generated/graphql'

interface PropsIndex {
  initialPostsData?: GetPostsQuery
  initialSettingsData?: GetSettingsQuery
  initialFeaturedPostData?: GetFeaturedPostQuery
}

// export const getStaticProps: GetStaticProps<any, any> = async () => {
//   // const initialSettingsData: GetSettingsQuery = await fetcher(getSettings)
//   // const initialPostsData: GetPostsQuery = await fetcher(getPosts, {
//   //   after: null,
//   // })
//   // const initialFeaturedPostData: GetFeaturedPostQuery = await fetcher(
//   //   getFeaturedPost,
//   // )
//   // return {
//   //   // eslint-disable-next-line
//   //   unstable_revalidate: 1,
//   //   props: {
//   //     initialPostsData,
//   //     initialSettingsData,
//   //     initialFeaturedPostData,
//   //   },
//   // }
// }

const Index: React.FC<PropsIndex> = ({
  initialFeaturedPostData,
  initialPostsData,
}: PropsIndex) => {
  return (
    <Home
      initialPostsData={initialPostsData}
      initialFeaturedPostData={initialFeaturedPostData}
    />
  )
}

export default Index
