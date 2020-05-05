import * as React from 'react'
import { formatRelative, parseISO } from 'date-fns'
import { Box } from 'src/components/primitives/Box'
import { H3, H5 } from 'src/components/Typography'
import { GetPostBySlugQuery } from 'src/generated/graphql'
import { HR } from 'src/components/Elements'
import { T, useI18n } from 'src/contexts/I18n'
import { Flex, Row } from 'src/components/Grid'
import { Text } from 'src/components/primitives/Text'
import { Calendar, MessageSquare } from 'react-feather'
import { UniversalLink } from 'src/components/UniversalLink'

interface PostHatProps {
  data: GetPostBySlugQuery
}

export const PostHat: React.FC<PostHatProps> = ({ data }: PostHatProps) => {
  const now = new Date()
  const { locale } = useI18n()

  return (
    <Flex>
      <Row sx={{ width: 'full' }}>
        <Box sx={{ width: '1/2', justifyContent: 'flex-start' }}>
          <UniversalLink
            routeName="author"
            params={{
              slug: data.post.author.slug,
              screen: 'post',
            }}
            web={{
              path: `/author/[slug]`,
              as: `/author/${data.post.author.slug}`,
            }}
          >
            <H3>
              <T id="posts.author" values={{ name: data.post.author.name }} />
            </H3>
          </UniversalLink>
        </Box>
        <Box
          sx={{
            width: '1/2',
            justifyContent: 'flex-start',
            alignItems: 'baseline',
          }}
        >
          <H5>
            <Calendar strokeWidth={3} size="16" />
            {formatRelative(parseISO(data.post.date), now, {})}
          </H5>
        </Box>
        {data.post.commentCount && (
          <Row
            sx={{
              width: '1/12',
              justifyContent: 'flex-end',
              alignItems: 'baseline',
            }}
          >
            <UniversalLink
              routeName="post"
              params={{ comment: true, slug: data.post.slug }}
              web={{
                path: `/post/[slug]`,
                as: `/post/${data.post.slug}?comment=true`,
              }}
            >
              <MessageSquare strokeWidth={3} size="12" />
              <Text>{data.post.commentCount}</Text>
            </UniversalLink>
          </Row>
        )}
      </Row>
      <Box sx={{ width: 'full' }}>
        <HR sx={{ height: '1px', bg: 'grayLight' }} />
      </Box>
    </Flex>
  )
}
