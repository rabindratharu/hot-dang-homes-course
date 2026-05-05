
import { getHomePageData } from "../lib/dataFetchers.js";
import { BlockRenderer } from "../components/BlockRenderer/BlockRenderer.js";
import { cleanTransformBlocks } from "../utils/index.js";

export default async function Home() {
  const data = await getHomePageData();
  const blocks = cleanTransformBlocks(data.nodeByUri.blocks);
  return (
    <div>
      {BlockRenderer({ blocks })}
    </div>
  );
}
