export const getSettings = /* GraphQL */ `
  query getSettings {
    settings: generalSettings {
      title
    }
    menus: menus(where: { slug: "header_links" }) {
      nodes {
        name
        menuItems {
          nodes {
            label
            url
            connectedObject {
              __typename
              ... on Category {
                slug
                categoryId
              }
              ... on MenuItem {
                label
                url
              }
              ... on Page {
                slug
                title(format: RENDERED)
              }
              ... on Post {
                slug
                title(format: RENDERED)
              }
            }
          }
        }
      }
    }
  }
`
