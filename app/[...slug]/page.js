import { getAllContentSlugs, getPageContentBySlug } from "../../lib/dataFetchers.js";
import { BlockRenderer } from "../../components/Block/BlockRenderer.js";
import { cleanTransformBlocks } from "../../utils/index.js";
import { Header } from "../../components/Header";

export default async function DynamicPage({ params }) {
  // Await params if it's a promise (Next.js 15+)
  const { slug } = await params;

  // Normalize slug to array
  const slugSegments = slug
    ? (Array.isArray(slug) ? slug : [slug])
    : [];

  try {
    const pageData = await getPageContentBySlug(slugSegments);

    // Check if page data exists
    if (!pageData) {
      return <NotFoundPage />;
    }

    const blocks = cleanTransformBlocks(pageData.blocks);

    return (
      <div className="flex min-h-dvh flex-1 flex-col">
        <Header />
        <main>
          <h1>{pageData.title}</h1>
          {BlockRenderer({ blocks })}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Failed to load page:', error);
    return <NotFoundPage />;
  }
}

// Generate static params for SSG
export async function generateStaticParams() {
  try {
    const slugs = await getAllContentSlugs();
    return slugs;
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

// Not found component
function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    </main>
  );
}