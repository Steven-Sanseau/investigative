import React from 'react'
import useSWR from 'swr'

import {
  getPageBySlug,
  getPages,
  getTags,
  getPostsByTag,
  getTag,
} from 'src/api/ghost'
import { Layout } from 'src/components/Layout'
import { Box } from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useRouting } from 'expo-next-react-navigation'
import { UniversalLink } from 'src/components/UniversalLink'
import { H2, H1 } from 'src/components/Typography'

export async function getStaticPaths() {
  const tags = await getTags()

  return {
    fallback: true,
    paths: tags.map((tag) => `/tag/${tag.slug}`),
  }
}

export async function getStaticProps({ params: { slug } }) {
  const tag = await getTag(slug)

  if (!tag || tag.visibility !== 'public') {
    return {
      props: {
        redirect: '/',
        preview: false,
      },
      revalidate: 5,
    }
  }

  const posts = await getPostsByTag(slug)
  return { props: { tag, posts } }
}

export default function Page({ tag: initialTagData, posts: initialPostsData }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  const { data: tag } = useSWR(`${slug}`, getTag, {
    initialData: initialTagData,
  })

  const { data: posts } = useSWR(`${slug}`, getPostsByTag, {
    initialData: initialPostsData,
  })
  return (
    <Layout>
      <Box>
        <UniversalLink routeName="">
          <H1>{tag?.name}</H1>
        </UniversalLink>
        {posts?.map((post) => (
          <UniversalLink
            routeName="/post"
            params={{ slug: post.slug }}
            web={{
              as: `/post/${post.slug}`,
              path: `/post/${post.slug}`,
            }}
          >
            <H2>{post.title}</H2>
          </UniversalLink>
        ))}
      </Box>
    </Layout>
  )
}
