import React from 'react'
import useSWR from 'swr'
import { getTags } from 'src/api/ghost'
import { Layout } from 'src/components/Layout'
import { Box } from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useRouting } from 'expo-next-react-navigation'
import { UniversalLink } from 'src/components/UniversalLink'
import { H2 } from 'src/components/Typography'

export async function getStaticProps() {
  const pages = await getTags()
  return { props: { pages } }
}

export default function Tags({ tags: initialData }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  const { data: tags } = useSWR(`${slug}`, getTags, {
    initialData,
  })

  return (
    <Layout>
      <Box>
        {tags?.map((tag) => (
          <UniversalLink
            routeName="/tag"
            params={{ slug: tag.slug }}
            web={{ as: `/tag/${tag.slug}`, path: `/tag/${tag.slug}` }}
          >
            <H2>{tag?.name}</H2>
          </UniversalLink>
        ))}
      </Box>
    </Layout>
  )
}
