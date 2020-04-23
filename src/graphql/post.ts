export const getPostBySlug = /* GraphQL */ `
  query getPostBySlug($slug: ID!) {
    post: post(id: $slug, idType: SLUG) {
      title(format: RENDERED)
      excerpt(format: RENDERED)
      date
      modified
      author {
        slug
        name
        avatar {
          url
        }
      }

      content(format: RENDERED)
      commentCount
      commentStatus
    }
  }
`
export const getFeaturedPost = /* GraphQL */ `
  query getFeaturedPost {
    featuredPost: posts {
      edges {
        node {
          id
          title(format: RENDERED)
          slug
          author {
            name
            slug
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
            sourceUrl(size: _2048X2048)
            caption(format: RAW)
            description(format: RAW)
          }
        }
      }
    }
  }
`

export const getPosts = /* GraphQL */ `
  query getPosts($after: String) {
    posts: posts(after: $after, first: 8) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title(format: RENDERED)
          slug
          author {
            name
            slug
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
