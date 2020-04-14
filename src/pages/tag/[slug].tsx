import React from 'react'
import { Box } from 'src/components/Box'
import { useRouting } from 'expo-next-react-navigation'
import { UniversalLink } from 'src/components/UniversalLink'
import { H1, H2 } from 'src/components/Typography'

export default function Page({ tag, posts }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  return (
    <Box>
      <UniversalLink routeName="home">
        <H1>{tag?.name}</H1>
      </UniversalLink>
      {posts?.map((post) => (
        <UniversalLink
          routeName="post"
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
  )
}
