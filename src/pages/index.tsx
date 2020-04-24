import React from 'react'
import { Home } from 'src/containers/Home'
import { fetcher } from 'src/utils/Fetcher'
import {
  GetPostsQuery,
  GetSettingsQuery,
  GetFeaturedPostQuery,
} from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { getPosts, getFeaturedPost } from 'src/graphql/post'

interface PropsIndex {
  initialPostsData?: GetPostsQuery
  initialSettingsData?: GetSettingsQuery
  initialFeaturedPostData?: GetFeaturedPostQuery
}

export const getStaticProps = async (): Promise<{ props: PropsIndex }> => {
  const initialSettingsData: GetSettingsQuery = await fetcher(getSettings)
  const initialPostsData: GetPostsQuery = await fetcher(getPosts, {
    after: null,
  })
  const initialFeaturedPostData: GetFeaturedPostQuery = await fetcher(
    getFeaturedPost,
  )
  return {
    props: { initialPostsData, initialSettingsData, initialFeaturedPostData },
  }
}

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
