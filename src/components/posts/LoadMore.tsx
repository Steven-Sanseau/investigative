import React, { ReactElement } from 'react'
import { T } from 'src/contexts/I18n'
import { Box } from 'src/components/primitives/Box'

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
      px: 2,
      py: 3,
      bg: 'grayDark',
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
        color: 'white',
      }}
      id={
        isLoadingMore
          ? 'loading'
          : isReachingEnd
          ? 'posts.end'
          : 'posts.loadMore'
      }
    />
  </Box>
)
