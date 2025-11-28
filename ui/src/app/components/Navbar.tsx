import Link from "next/link";
import {motion} from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const [isActive, setisActive] = useState<number | null>(null);
  return (
    <div className="w-full h-screen  py-20">
      <nav className=" max-w-3xl bg-neutral-300 mx-auto p-1 rounded-4xl text-2xl space justify-between text-neutral-700 flex  ">
        {navItems.map((item, i) => (
          <Link
            onMouseEnter={() => setisActive(i)}
            onMouseLeave={() => setisActive(null)}
            href={item.link}
            key={i}
            className="relative w-full h-15 py-3 text-center group"
          >
            <span className="group-hover:text-white z-10 relative">{item.name}</span>

            {isActive == i && (
              <motion.div layoutId="nav" className="inset-0   bg-neutral-800 rounded-4xl absolute h-full w-full z-0"></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
