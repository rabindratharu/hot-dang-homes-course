import client from "./apolloClient.js";
import { GET_HOME_PAGE } from "./queries.js";

export async function getHomePageData() {
  const { data } = await client.query({
    query: GET_HOME_PAGE,
  });
  return data;
}