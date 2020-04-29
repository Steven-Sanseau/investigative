export const getCategoryBySlug = /* GraphQL */ `
  query getCategoryBySlug($slug: ID!, $after: String) {
    category: category(id: $slug, idType: SLUG) {
      name
      databaseId
      posts(after: $after, first: 8) {
        nodes {
          slug
          title(format: RAW)
        }
      }
    }
  }
`

export const getCategories = /* GraphQL */ `
  query getCategories {
    categories: categories(first: 100, where: { childless: false }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        name
        color {
          color
        }
        show_menu {
          showHeaderMenu
          showFooterMenu
        }
      }
    }
  }
`
