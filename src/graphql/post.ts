export const getPostBySlug = /* GraphQL */ `
  query getPostBySlug($slug: ID!) {
    post: post(id: $slug, idType: SLUG) {
      slug
      databaseId
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
      featuredImage {
        altText
        sourceUrl(size: _2048X2048)
        caption(format: RAW)
        description(format: RAW)
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

export const getAllPosts = /* GraphQL */ `
  query getAllPosts {
    posts: posts(first: 10000) {
      edges {
        node {
          title(format: RENDERED)
          slug
        }
      }
    }
  }
`

export const getPostsByAuthorId = /* GraphQL */ `
  query getPostsByAuthor($after: String, $id: [ID]) {
    posts: posts(after: $after, first: 8, where: { authorIn: $id }) {
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

export const getPostsByCategoryId = /* GraphQL */ `
  query getPostsByCategoryId($after: String, $id: Int) {
    posts: posts(after: $after, first: 8, where: { categoryId: $id }) {
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

export const searchPosts = /* GraphQL */ `
  query searchPosts($after: String, $search: String) {
    posts: posts(where: { search: $search }, after: $after, first: 8) {
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
