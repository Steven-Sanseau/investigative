export const getPostBySlug = /* GraphQL */ `
  query getPostBySlug($slug: String) {
    post: postBy(slug: $slug) {
      title(format: RENDERED)
      excerpt(format: RENDERED)
      date
      modified
      author {
        slug
        name
        avatar {
          url
        }
      }

      content(format: RENDERED)
      commentCount
      commentStatus
    }
  }
`
