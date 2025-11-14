"use client";
import Image from "next/image";
import { easeOut, motion, scale } from "framer-motion";
import { image, radialGradient } from "motion/react-client";

export default function SubButton() {
  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-neutral-950 "
      style={{
        backgroundImage: "radial-gradient(#444 1px ,transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <motion.button
        className="border-1 rounded p-3 text-2xl bg-neutral-900
         text-neutral-300 shadow-xl/20 shadow-neutral-50"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1, ease: easeOut },
        }}
        initial={{ opacity: 0, rotate: 300 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 0.2}}
      >
        Subscribe
      </motion.button>
    </div>
  );
}
