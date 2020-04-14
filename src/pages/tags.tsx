import { useRouting } from 'expo-next-react-navigation'
import React from 'react'
import { Box } from 'src/components/Box'
import { H2 } from 'src/components/Typography'
import { UniversalLink } from 'src/components/UniversalLink'

export default function Tags({ tags }) {
  const { getParam } = useRouting()
  const slug = getParam('slug')

  // const { data: tags } = useSWR(`${slug}`, getTags, {
  //   initialData,
  //   suspense: true,
  // })

  return (
    <Box>
      {tags?.map((tag) => (
        <UniversalLink
          routeName="tag"
          params={{ slug: tag.slug }}
          web={{ as: `/tag/${tag.slug}`, path: `/tag/${tag.slug}` }}
        >
          <H2>{tag?.name}</H2>
        </UniversalLink>
      ))}
    </Box>
  )
}
