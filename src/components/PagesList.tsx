import * as React from 'react'
import { GetPagesQuery } from '../generated/graphql'
import useSWR from 'swr'
import { Text } from './primitives/Text'
import { getPages } from '../graphql/page'
import { Box } from './primitives/Box'
import { UniversalLink } from './UniversalLink'
import { H3 } from './Typography'

interface PageListProps {
  initialPagesData?: GetPagesQuery
}

export const PagesList: React.FC<PageListProps> = ({
  initialPagesData,
}: PageListProps) => {
  const { data }: { data?: GetPagesQuery } = useSWR(getPages, {
    initialData: initialPagesData,
  })

  if (!data) {
    return <Text>...</Text>
  }

  return (
    <Box>
      {data.pages.nodes.map((page, index) => (
        <Box key={index.toString()} sx={{ my: 2 }}>
          <UniversalLink
            routeName="page"
            params={{ uri: page.uri }}
            web={{ as: `/page${page.uri}`, path: `/page${page.uri}` }}
          >
            <H3>{page.title}</H3>
          </UniversalLink>
        </Box>
      ))}
    </Box>
  )
}
