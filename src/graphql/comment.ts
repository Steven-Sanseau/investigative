export const getComments = /* GraphQL */ `
  query getComments($postId: ID!, $after: String) {
    comments: comments(where: { contentId: $postId }, after: $after, first: 8) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        commentId
        date
        approved
        content(format: RENDERED)
        date
        author {
          ... on CommentAuthor {
            name
          }
          ... on User {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
`

export const createComment = /* GraphQL */ `
  mutation CREATE_COMMENT($comment: CreateCommentInput!) {
    createComment(input: $comment) {
      comment {
        commentId
        date
        approved
        content(format: RENDERED)
        date
        author {
          ... on CommentAuthor {
            name
          }
          ... on User {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
`
