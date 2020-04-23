export const getCategoryBySlug = /* GraphQL */ `
  query getCategoryBySlug($slug: ID!, $after: String) {
    category: category(id: $slug, idType: SLUG) {
      name
      posts(after: $after, first: 8) {
        edges {
          node {
            slug
            title(format: RAW)
          }
        }
      }
    }
  }
`
export const getCategories = /* GraphQL */ `
  query getCategories {
    categories: categories(first: 100) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`
