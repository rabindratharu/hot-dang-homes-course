import { gql } from "@apollo/client";

// Get home page content
export const GET_HOME_PAGE = gql`
  query GetHomePage {
    nodeByUri(uri: "/") {
      ... on Page {
        id
        title
        blocks(postTemplate: false)
      }
    }
  }
`;

// Get main menu
export const GET_MAIN_MENU = gql`
query MenuQuery {
  acfOptionsThemeSettings {
    headerSettings {
      menuItem {
        itemGroup {
          label
          destination {
            ... on Page {
              uri
            }
          }
        }
        level1 {
          destination {
            ... on Page {
              uri
            }
          }
          label
          level2 {
            destination {
              ... on Page {
                uri
              }
            }
            label
          }
        }
      }
    }
  }
}
`;

// Get menu cta
export const GET_MENU_CTA = gql`
query MenuCtaQuery {
  acfOptionsThemeSettings {
    headerSettings {
      callToAction {
        destination {
          ... on Page {
            uri
          }
        }
        label
      }
    }
  }
}
`;

// Get page content by slug/uri
export const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        uri
        slug
        content
        blocks(postTemplate: false)
        seo {
          title
          metaDesc
        }
      }
      ... on Post {
        id
        title
        uri
        slug
        content
        blocks
        seo {
          title
          metaDesc
        }
      }
    }
  }
`;

// Get all page slugs for static generation
export const GET_ALL_PAGE_SLUGS = gql`
  query GetAllPageSlugs {
    pages {
      nodes {
        uri
        slug
      }
    }
    posts {
      nodes {
        uri
        slug
      }
    }
  }
`;

// Get dynamic page/post by slug
export const GET_CONTENT_BY_SLUG = gql`
  query GetContentBySlug($slug: String!, $contentType: ContentType!) {
    contentBySlug(slug: $slug, contentType: $contentType) {
      ... on Page {
        id
        title
        content
        blocks(postTemplate: false)
        date
      }
      ... on Post {
        id
        title
        content
        blocks
        date
        author {
          node {
            name
          }
        }
      }
    }
  }
`;