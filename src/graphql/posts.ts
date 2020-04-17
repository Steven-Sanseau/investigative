// import gql from 'graphql-tag'

export const getPosts = /* GraphQL */ `
  query getPosts {
    posts: posts {
      edges {
        node {
          id
          title(format: RENDERED)
          slug
          author {
            name
          }
          date
          categories {
            nodes {
              slug
              name
            }
          }
          commentCount
          excerpt(format: RENDERED)
          featuredImage {
            altText
            sourceUrl(size: MEDIUM)
            caption(format: RAW)
            description(format: RAW)
          }
        }
      }
    }
  }
`

export const getPostsSlug = /* GraphQL */ `
  query getPostsSlug {
    posts: posts {
      edges {
        node {
          slug
        }
      }
    }
  }
`
