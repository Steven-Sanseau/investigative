// import gql from 'graphql-tag'

export const getPostBySlug = /* GraphQL */ `
  query getPostBySlug($slug: String) {
    post: postBy(slug: $slug) {
      uri
      content
    }
  }
`
