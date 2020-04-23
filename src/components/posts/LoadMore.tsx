import React, { ReactElement } from 'react'
import { T } from 'src/contexts/I18n'
import { Box } from 'src/components/primitives/Box'
import { Text } from 'src/components/primitives/Text'

interface LoadMoreProps {
  loadMore: () => void
  isReachingEnd: boolean
  isLoadingMore: boolean
}
export const LoadMore = ({
  loadMore,
  isReachingEnd,
  isLoadingMore,
}: LoadMoreProps): ReactElement => (
  <Box
    sx={{
      px: 10,
      py: 5,
      bg: 'gray',
      mx: 'auto',
      cursor: 'pointer',
    }}
  >
    <T
      onPress={loadMore}
      sx={{
        mx: 'auto',
        fontFamily: 'heading',
        textTransform: 'uppercase',
      }}
      id={
        isLoadingMore
          ? 'loading'
          : isReachingEnd
          ? 'home.posts.end'
          : 'home.posts.loadMore'
      }
    />
  </Box>
)
