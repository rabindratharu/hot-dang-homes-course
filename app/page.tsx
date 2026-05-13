import { getHomePageData } from "../lib/dataFetchers.js";
import { BlockRenderer } from "../components/Block/BlockRenderer.js";
import { Header } from "../components/Header";
import { cleanTransformBlocks } from "../utils/index.js";

export default async function Home() {
  try {
    const homeData = await getHomePageData();
    const blocks = cleanTransformBlocks(homeData.nodeByUri.blocks);

    return (
      <div className="flex min-h-dvh flex-1 flex-col">
        <Header />
        <main>{BlockRenderer({ blocks })}</main>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
