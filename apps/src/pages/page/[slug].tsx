import React from 'react'
import useSWR from 'swr'

import { getPageBySlug, getPages } from 'src/api/ghost'
import { Layout } from 'src/components/Layout'
import { Box } from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useRouting } from 'expo-next-react-navigation'
import { UniversalLink } from 'src/components/UniversalLink'

export async function getStaticPaths() {
  const pages = await getPages()

  return {
    fallback: true,
    paths: pages.map((page) => `/page/${page.slug}`),
  }
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug)

  if (!page || page.visibility !== 'public') {
    return {
      props: {
        redirect: '/',
        preview: false,
      },
      revalidate: 5,
    }
  }
  return { props: { page } }
}

export default function Page({ page: initialData }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  const { data: page } = useSWR(`${slug}`, getPageBySlug, {
    initialData,
  })
  return (
    <Layout>
      <Box>
        <UniversalLink routeName="">
          <Text>{page?.title}</Text>
        </UniversalLink>
        <Text>{page?.html}</Text>
      </Box>
    </Layout>
  )
}
