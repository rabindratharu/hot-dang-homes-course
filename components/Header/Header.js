import {
    getMainMenuData,
    getMenuCtaData,
} from "../../lib/dataFetchers.js";
import {
    mapMenuItems,
    menuButton,
} from "../../utils/index.js";

import { Menu } from "./Menu.js";
import { Logo } from "./Logo.js";
import { Button } from "./Button.js";

export const Header = async () => {
    try {
        const [menuData, ctaData] = await Promise.all([
            getMainMenuData(),
            getMenuCtaData(),
        ]);

        const menuItems = mapMenuItems(menuData.acfOptionsThemeSettings.headerSettings.menuItem);
        const ctaButton = menuButton(ctaData.acfOptionsThemeSettings.headerSettings.callToAction);

        return (
            <header className='border-b-0 bg-background md:border-b md:border-separator-secondary'>
                <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
                    <Logo />
                    <div className="flex flex-1 items-center justify-end">
                        <Menu menuItems={menuItems} />
                        <Button button={ctaButton} />
                    </div>
                </div>
            </header>
        );
    }
    catch (error) {
        console.log(error);
    }
};