import Link from "next/link";

export const Menu = ( props ) => {
    const { menuItems } = props;
  return (
    <nav className="flex gap-5">
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
    </nav>
  )
}
