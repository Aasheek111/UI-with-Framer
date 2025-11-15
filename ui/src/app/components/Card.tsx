"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconBase } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { Ri24HoursLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Card() {
  const [isOpen, setIsopen] = useState(true);

  return (
    <>
      <div className="h-screen w-full bg-white">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="h-screen w-full bg-neutral-100 flex justify-center items-center "
            >
              <div className="h-[29rem]  w-[22rem] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-2xl text-black p-5 bg-neutral-100 flex flex-col ">
                <h1 className="w-full  text-lg font-bold">
                  Aashik UI Component
                </h1>
                <p className="text-sm  text-neutral-500">
                  Beautiful ui components scalable, fast and easy to use
                </p>

                <div className="flex justify-center p-4 items-center">
                  <button
                    onClick={() => setIsopen(false)}
                    className="flex gap-2 items-center rounded  
          shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-2 hover:shadow-sm"
                  >
                    <Image
                      src={"next.svg"}
                      width={20}
                      height={20}
                      alt="pic"
                      className=""
                    />
                    <p>Aashik UI</p>

                    <IoCloseSharp className="h-4 w-4 text-neutral-500" />
                  </button>
                </div>

                {/* asternity */}
                <div className="flex-1 relative  rounded-2xl  border-dashed border-gray-300 border flex overflow-hidden group ">
                  <div className=" h-full w-full  opacity-0 group-hover:opacity-100 transition duration-555">
                    <div
                      className={cn(
                        "absolute inset-0 opacity-30 transition-opacity ease-in-out duration-300",
                        "[background-size:20px_20px]",
                        "[background-image:linear-gradient(to_right,var(--color-neutral-100_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                       )}
                    ></div>
                    <div className="pointer-events-none absolute opacity-100  inset-0 flex items-center  bg-white [mask-image:radial-gradient(circle_at_bottom_right,transparent_1%,gray_50%)] dark:bg-white"></div>
                  </div>

                  {/* motion */}
                  <motion.div
                    initial={{ opacity: 1, filter: "blur(1px)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ opacity: 1, filter: "blur(0px)" }}
                    className="absolute inset-0 h-full w-full rounded  flex flex-col divide-y divide-neutral-400 z-10  p-2"
                  >
                    <div className="flex p-3">
                      <div className="h-7 w-7 p-1 m-3 flex rounded-lg  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                        <LuMessageSquareMore className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm">Aashik UI</p>
                        <p className="text-xs text-neutral-400">
                          Explore new and best UI components for free
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3">
                      <div className="h-7 w-7 p-1 m-3 flex rounded-lg  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                        <Ri24HoursLine className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm">24Hr Service</p>
                        <p className="text-xs text-neutral-400">
                          You can have a beautiful UI components every second
                          you want
                        </p>
                      </div>
                    </div>

                    <div className="flex p-3">
                      <div className="h-7 w-7 p-1 m-3 flex rounded-lg  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                        <LuMessageSquareMore className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm">Aashik UI</p>
                        <p className="text-xs text-neutral-400">
                          Explore new and best UI components for free
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-center items-center ">
                      <div className="h-6  flex items-center justify-center mt-2 w-6 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                        <FaPlus className="text-neutral-600" />
                      </div>
                      <p className="text-neutral-600 mt-2">Create</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Card;
