import { gql } from "@apollo/client";
import client from "../lib/apolloClient";   // or use initializeApollo()
export default function Home(props) {
  console.log(props);
  return <div dangerouslySetInnerHTML={{ __html: props.title }} />;
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetPages {
        pages {
          nodes {
            title
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
      title: "Next JS &amp; WordPress course.",
      description: "Learn how to build a Next JS &amp; WordPress website.",
    },
  };
}
