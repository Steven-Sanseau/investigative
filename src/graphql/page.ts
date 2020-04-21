export const getPageByUri = /* GraphQL */ `
  query getPageByUri($uri: String) {
    page: pageBy(uri: $uri) {
      title(format: RENDERED)
      content
    }
  }
`
