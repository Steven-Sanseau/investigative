import { Box } from '../primitives/Box'
import * as React from 'react'
import { Input } from '../primitives/Input'
import { Text } from '../primitives/Text'
import { Button } from 'react-native'
import { createComment } from '../../graphql/comment'
import { fetcher } from '../../utils/Fetcher'
import { useGrowl } from '../../contexts/Growl'
import { mutate } from 'swr'
import { T, useT } from '../../contexts/I18n'

interface CommentFormProps {
  postId: number
  parentId?: number
}

export const CommentForm: React.FC<CommentFormProps> = ({
  postId,
  parentId,
}: CommentFormProps) => {
  const [comment, setComment] = React.useState({
    clientMutationId: 'CreateComment',
    commentOn: postId,
    parent: parentId || null,
  })

  const growl = useGrowl()
  const t = useT()

  const handleValue = (key, value): void => {
    setComment({ ...comment, [key]: value })
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      await fetcher(createComment, { comment })
      mutate(`_swr_page_offset_comment_${postId}`, 0)
      mutate(`_swr_page_count_comment_${postId}`, 0)
      growl.success(t('comment.form.success'))
    } catch ({ response: errors }) {
      const { message } = errors[0] || 'comment.form.notSend'
      growl.error(message)
    }
  }

  return (
    <Box>
      <Text>
        <T id="comment.input.content" />
      </Text>
      <Input
        data-name="content"
        multiline
        numberOfLines={4}
        onChangeText={(value) => handleValue('content', value)}
      />
      <Text>
        <T id="comment.input.name" />
      </Text>
      <Input
        data-name="author"
        autoCompleteType="name"
        textContentType="name"
        onChangeText={(value) => handleValue('author', value)}
      />
      <Text>
        <T id="comment.input.email" />
      </Text>
      <Input
        keyboardType="email-address"
        data-name="authorEmail"
        textContentType="emailAddress"
        autoCompleteType="email"
        onChangeText={(value) => handleValue('authorEmail', value)}
      />
      <Button title={'Send'} onPress={handleSubmit} />
    </Box>
  )
}
