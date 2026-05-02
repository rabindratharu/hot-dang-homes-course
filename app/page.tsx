
import { getHomePageData } from "../lib/useWordPressData.js";
import { BlockRenderer } from "../components/BlockRenderer/BlockRenderer.js";
import { cleanTransformBlocks } from "../utils/cleanTransformBlocks.js";

export default async function Home() {
  const data = await getHomePageData();
  const blocks = cleanTransformBlocks(data.nodeByUri.blocks);
  return (
    <div>
      {BlockRenderer({ blocks })}
    </div>
  );
}
