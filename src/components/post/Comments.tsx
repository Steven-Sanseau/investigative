import * as React from 'react'
import { Box } from '../primitives/Box'
import { GetCommentsQuery } from 'src/generated/graphql'
import useSWR, { useSWRPages } from 'swr'
import { getComments } from 'src/graphql/comment'
import { RenderBlocks } from './Blocks'
import { Text } from '../primitives/Text'
import { Flex } from '../Grid'
import { LoadMore } from '../posts/LoadMore'
import { Button } from 'react-native'
import { CommentForm } from './CommentForm'

const Comment = ({ comment, postId }: { comment: any; postId: number }) => {
  const [reply, setReply] = React.useState<boolean>(false)

  return (
    <>
      <Flex>
        <Text>{comment.author?.name}</Text>
        <Text>{comment.date}</Text>
        <RenderBlocks content={comment.content} />
        {comment.replies?.nodes && (
          <Box sx={{ ml: 20, color: 'red' }}>
            {comment.replies.nodes.map((c, i) => (
              <Comment key={i} postId={postId} comment={c} />
            ))}
          </Box>
        )}
        {!reply && <Button title={'Reply'} onPress={() => setReply(true)} />}
        {reply && <CommentForm postId={postId} parentId={comment.commentId} />}
      </Flex>
    </>
  )
}

interface CommentsProps {
  postId: number
}

export const Comments: React.FC<CommentsProps> = ({
  postId,
}: CommentsProps) => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    `comment_${postId}`,
    ({ offset, withSWR }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const paginationParams = React.useMemo(
        () => ({ after: offset, postId }),
        [offset, postId],
      )

      const { data }: { data?: GetCommentsQuery } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSWR([getComments, paginationParams]),
      )

      if (!data) {
        return <></>
      }

      return (
        <Box sx={{}}>
          {data?.comments?.nodes?.map((comment, index) => (
            <Comment key={index} postId={postId} comment={comment} />
          ))}
        </Box>
      )
    },
    ({ data }) => {
      return data?.comments?.pageInfo?.hasNextPage
        ? data.comments.pageInfo.endCursor
        : null
    },
    [],
  )

  return (
    <Flex>
      {pages}
      <LoadMore
        isReachingEnd={isReachingEnd}
        isLoadingMore={isLoadingMore}
        loadMore={loadMore}
      />
    </Flex>
  )
}
