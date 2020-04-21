export const getPages = /* GraphQL */ `
  query getPages {
    pages: pages(first: 10) {
      edges {
        node {
          title(format: RENDERED)
          uri
        }
      }
    }
  }
`
