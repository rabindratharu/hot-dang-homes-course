import { gql } from "@apollo/client";

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