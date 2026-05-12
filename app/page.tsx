
import { 
  getHomePageData,
  getMainMenuData,
  getMenuCtaData } from "../lib/dataFetchers.js";
import { BlockRenderer } from "../components/BlockRenderer/BlockRenderer.js";
import { MainMenu } from "../components/MainMenu/MainMenu.js";
import { 
  cleanTransformBlocks,
  mapMenuItems,
  menuButton 
} from "../utils/index.js";

export default async function Home() {
  const data = await getHomePageData();
  const menuData = await getMainMenuData();
  const ctaData = await getMenuCtaData();
  const menuItems = mapMenuItems(menuData.acfOptionsThemeSettings.headerSettings.menuItem);
  const blocks = cleanTransformBlocks(data.nodeByUri.blocks);
  const menuCta = menuButton(ctaData.acfOptionsThemeSettings.headerSettings.callToAction);
  return (
    <div>
      <MainMenu 
        menuItems={menuItems} 
        callToAction={menuCta}
      />
      {BlockRenderer({ blocks })}
    </div>
  );
}
