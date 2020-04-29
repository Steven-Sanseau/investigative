export const getPageByUri = /* GraphQL */ `
  query getPageByUri($uri: ID!) {
    page: page(id: $uri, idType: URI) {
      title(format: RENDERED)
      content
    }
  }
`
export const getPages = /* GraphQL */ `
  query getPages {
    pages: pages(first: 10) {
      nodes {
        title(format: RENDERED)
        uri
      }
    }
  }
`
