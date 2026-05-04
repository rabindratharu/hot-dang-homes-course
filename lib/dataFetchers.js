import client from "./apolloClient.js";
import { GET_HOME_PAGE, GET_PAGE_BY_URI, GET_ALL_PAGE_SLUGS } from "./queries.js";

export async function getHomePageData() {
  const { data } = await client.query({
    query: GET_HOME_PAGE,
  });
  return data;
}

export async function getPageContentBySlug(slug = []) {
  const slugArray = Array.isArray(slug)
    ? slug
    : slug
    ? [slug]
    : [];

  const normalizedSlug = slugArray.filter(Boolean).map((segment) => String(segment));
  let uri = '/';
  if (normalizedSlug.length > 0) {
    uri = `/${normalizedSlug.join('/')}/`;
  }

  const { data } = await client.query({
    query: GET_PAGE_BY_URI,
    variables: { uri },
  });

  return data.nodeByUri;
}

// Updated getAllContentSlugs in lib/dataFetchers.js
export async function getAllContentSlugs() {
  const { data } = await client.query({
    query: GET_ALL_PAGE_SLUGS,
  });

  const allContent = [
    ...(data.pages?.nodes || []),
    ...(data.posts?.nodes || [])
  ];

  const slugs = allContent
    .filter(content => content.uri !== '/')
    .map((content) => {
      const slugPath = content.uri
        .replace(/^\/|\/$/g, '')
        .split('/')
        .filter(Boolean);
      
      // For catch-all route, just return the path segments
      return { slug: slugPath };
    });
    
  // Don't forget to include homepage if needed
  // slugs.push({ slug: [] }); // Uncomment if you want to handle homepage with this route

  return slugs;
}