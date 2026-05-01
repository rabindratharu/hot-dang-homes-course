import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",   // More flexible
    link: createHttpLink({
      uri: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSR always create a new client
  if (typeof window === "undefined") return _apolloClient;

  // For client-side, reuse the same instance
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export default initializeApollo();