import React, { ReactElement } from 'react'
import { T } from 'src/contexts/I18n'
import { Box } from 'src/components/primitives/Box'
import { ActivityIndicator } from 'react-native'

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
      my: 4,
      cursor: 'pointer',
    }}
  >
    {isLoadingMore && <ActivityIndicator />}
    {!isLoadingMore && (
      <T
        onPress={loadMore}
        sx={{
          mx: 'auto',
          fontFamily: 'heading',
          textTransform: 'uppercase',
          color: 'white',
        }}
        id={isReachingEnd ? 'posts.end' : 'posts.loadMore'}
      />
    )}
  </Box>
)
