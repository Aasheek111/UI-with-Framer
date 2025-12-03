'use client';
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

function Navbar() {
  const navelements = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState<number | null>(null);
  return (
    <Container className="bg-neutral-50 text-primary w-full">
      <nav className="flex text-xl w-full items-center justify-between p-3">
        <Image
          src="/favicon.ico"
          alt="ff"
          height={500}
          width={500}
          className="h-10 w-auto rounded-2xl"
        />
        <div className="flex ">
          {navelements.map((element, index) => (
            <Link
              href={element.href}
              key={index}
              className="relative w-25 h-10 flex items-center justify-center z-20  "
              onMouseEnter={() => setIsOpen(index)}
              onMouseLeave={() => setIsOpen(null)}
              
            >
              {element.name}

              {isOpen === index && (
                <motion.span
                layoutId="navbar-hover"
                className="bg-neutral-200 h-full w-full absolute inset-0 rounded-xl -z-10" ></motion.span>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
