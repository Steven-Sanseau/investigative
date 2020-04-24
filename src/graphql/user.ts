export const getAuthorBySlug = /* GraphQL */ `
  query getAuthorBySlug($slug: ID!) {
    user: user(idType: SLUG, id: $slug) {
      slug
      userId
      email
      name
      firstName
      lastName
      isRestricted
      description
      avatar {
        url
      }
    }
  }
`
export const getAuthors = /* GraphQL */ `
  query getAuthors {
    users: users(first: 100) {
      edges {
        node {
          slug
          name
          userId
        }
      }
    }
  }
`
