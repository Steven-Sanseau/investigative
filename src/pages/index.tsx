import React from 'react'
import { Home } from 'src/containers/Home'
import { fetcher } from 'src/utils/Fetcher'
import { GetPostsQuery, GetSettingsQuery } from 'src/generated/graphql'
import { getSettings } from 'src/graphql/settings'
import { getPosts } from 'src/graphql/posts'

interface PropsIndex {
  initialPostsData?: GetPostsQuery
  initialSettingsData?: GetSettingsQuery
}

export const getStaticProps = async (): Promise<{ props: PropsIndex }> => {
  const initialSettingsData: GetSettingsQuery = await fetcher(getSettings)
  const initialPostsData: GetPostsQuery = await fetcher(getPosts, {
    after: null,
  })
  return { props: { initialPostsData, initialSettingsData } }
}

const Index: React.FC<PropsIndex> = (props: PropsIndex) => {
  return <Home initialPostsData={props?.initialPostsData} />
}

export default Index
