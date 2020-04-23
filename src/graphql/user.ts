export const getAuthorBySlug = /* GraphQL */ `
  query getAuthorBySlug($slug: ID!, $after: String) {
    user: user(idType: SLUG, id: $slug) {
      slug
      email
      name
      firstName
      lastName
      isRestricted
      description
      avatar {
        url
      }
      posts(first: 8, after: $after) {
        edges {
          node {
            slug
            title(format: RAW)
            categories {
              nodes {
                name
                slug
              }
            }
            featuredImage {
              altText
              sourceUrl(size: MEDIUM_LARGE)
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
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
        }
      }
    }
  }
`
