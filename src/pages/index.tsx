import React from 'react'
import { Home } from 'src/containers/Home'
import {
  GetFeaturedPostQuery,
  GetPostsQuery,
  GetSettingsQuery,
} from 'src/generated/graphql'
import { fetcher } from 'src/utils/Fetcher'
import { getPosts, getFeaturedPost } from 'src/graphql/post'
import { getSettings } from 'src/graphql/settings'
import { GetServerSideProps } from 'next'

interface PropsIndex {
  initialPostsData?: GetPostsQuery
  initialSettingsData?: GetSettingsQuery
  initialFeaturedPostData?: GetFeaturedPostQuery
}

export const getServerSideProps: GetServerSideProps<any, any> = async () => {
  const initialSettingsData: GetSettingsQuery = await fetcher(getSettings)
  const initialPostsData: GetPostsQuery = await fetcher(getPosts, {
    after: null,
  })
  const initialFeaturedPostData: GetFeaturedPostQuery = await fetcher(
    getFeaturedPost,
  )
  return {
    props: {
      initialPostsData,
      initialSettingsData,
      initialFeaturedPostData,
    },
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
