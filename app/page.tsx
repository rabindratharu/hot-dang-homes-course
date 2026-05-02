import { gql } from "@apollo/client";
import client from "../lib/apolloClient.js";   // or use initializeApollo()
import { BlockRenderer } from "../components/BlockRenderer/BlockRenderer.js";
import { cleanTransformBlocks } from "../utils/cleanTransformBlocks.js";

export default async function Home() {
  const { data } = await client.query({
    query: gql`
      query GetHomePage {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });

  const blocks = cleanTransformBlocks(data.nodeByUri.blocks);

  return (
    <div>
      {BlockRenderer({ blocks })}
    </div>
  );
}
