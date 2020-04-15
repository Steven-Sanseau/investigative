// import gql from 'graphql-tag'

export const getPostBySlug = /* GraphQL */ `
  query getPostBySlug($slug: String) {
    post: postBy(slug: $slug) {
      uri
      blocks {
        __typename
        ... on CoreHeadingBlock {
          name
          attributes {
            __typename
            ... on CoreHeadingBlockAttributes {
              content
              level
            }
            content
            level
          }
        }
        ... on CoreParagraphBlock {
          name
          attributes {
            __typename
            ... on CoreParagraphBlockAttributes {
              backgroundColor
              content
            }
            ... on CoreParagraphBlockAttributesV3 {
              fontSize
              content
            }
            ... on CoreParagraphBlockAttributesV2 {
              align
              backgroundColor
              content
            }
          }
        }
        name
        ... on CoreImageBlock {
          attributes {
            alt
            href
            title
            url
            rel
            id
            caption
            align
          }
        }
        ... on CoreListBlock {
          attributes {
            values
            type
            ordered
          }
          name
        }
        ... on CoreQuoteBlock {
          parentId
          attributes {
            citation
            value
          }
          originalContent
        }
      }
    }
  }
`
