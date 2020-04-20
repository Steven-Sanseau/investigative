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
          thumbnail: featuredImage {
            sourceUrl(size: POST_THUMBNAIL)
          }
          image: featuredImage {
            altText
            sourceUrl(size: LARGE)
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
