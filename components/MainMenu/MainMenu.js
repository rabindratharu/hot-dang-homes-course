import Link from "next/link";
import { FiHome, FiHeart } from "react-icons/fi";

export const MainMenu = (props) => {
  const { menuItems, callToAction } = props;
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="flex items-center justify-start gap-1 text-pink-500">
        <FiHome size={30} />
        <FiHeart size={30} />
      </div>
      <div className="flex flex-1 items-center justify-end">
        <div className="flex gap-5">
          {(menuItems || []).map((item) => (
            <div key={item.id} className="relative group">
              <Link href={item.destination} className="hover:bg-slate-700 cursor-pointer block px-3 py-2">
                {item.label}
              </Link>
              {item.level1 && item.level1.length > 0 && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full">
                  {item.level1.map((level1) => (
                    <div key={level1.id} className="relative group/sub">
                      <Link href={level1.destination} className="whitespace-nowrap hover:bg-slate-600 cursor-pointer block px-3 py-2">
                        {level1.label}
                      </Link>
                      {level1.level2 && level1.level2.length > 0 && (
                        <div className="group/sub-hover:block hidden bg-slate-800 text-right absolute right-0 top-full">
                          {level1.level2.map((level2) => (
                            <Link key={level2.id} href={level2.destination} className="whitespace-nowrap hover:bg-slate-500 cursor-pointer block px-3 py-2">
                              {level2.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="ml-5">
          <Link href={callToAction.destination} className="bg-pink-500 hover:bg-pink-700 text-white uppercase cursor-pointer inline-block px-3 py-2 rounded-sm">
            {callToAction.label}
          </Link>
        </div>
      </div>
    </div>
  );
};