import * as React from 'react'
import { GetPagesQuery } from '../generated/graphql'
import useSWR from 'swr'
import { Text } from './primitives/Text'
import { getPages } from '../graphql/page'
import { Box } from './primitives/Box'
import { UniversalLink } from './UniversalLink'
import { H4 } from './Typography'

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
      {data.pages.nodes.map((page) => (
        <Box>
          <UniversalLink
            routeName="page"
            params={{ uri: page.uri }}
            web={{ as: `/page${page.uri}`, path: `/page${page.uri}` }}
          >
            <H4 sx={{ fontSize: 8, fontFamily: 'heading' }}>{page.title}</H4>
          </UniversalLink>
        </Box>
      ))}
    </Box>
  )
}
