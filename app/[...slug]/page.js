import { getAllContentSlugs, getPageContentBySlug } from "../../lib/dataFetchers.js";
import { BlockRenderer } from "../../components/BlockRenderer/BlockRenderer.js";
import { cleanTransformBlocks } from "../../utils/cleanTransformBlocks.js";

export default async function DynamicPage({ params }) {
  // Await params if it's a promise (Next.js 15+)
  const { slug } = await params;
  
  // Normalize slug to array
  const slugSegments = slug 
    ? (Array.isArray(slug) ? slug : [slug])
    : [];

  const pageData = await getPageContentBySlug(slugSegments);

  const blocks = cleanTransformBlocks(pageData.blocks);

  if (!pageData) {
    return (
      <div className="not-found">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="dynamic-page">
      <h1>{pageData.title}</h1>
      {BlockRenderer({ blocks })}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllContentSlugs();
  return slugs;
}