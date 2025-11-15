"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, scale } from "framer-motion";
function Variant() {
  const [show, setShow] = useState(false);

  const emojiVariant = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const childVariant = {
    show: {
      opacity: 1,
      y: 0,
      scale: 1.05,
    },
    hide: {
      opacity: 0,
      y: -10,
      scale: 0.1,
    },
  };
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center flex-col">
      <AnimatePresence>
        {show && (
          <motion.div
            className="flex text-6xl justify-center items-center p-3 gap-2 bg-white rounded-xl my-2"
            variants={emojiVariant}
            initial="hide"
            animate="show"
            exit="hide"
          >
            <motion.span variants={childVariant}>❤️</motion.span>
            <motion.span variants={childVariant}>👍</motion.span>
            <motion.span variants={childVariant}>👎</motion.span>
            <motion.span variants={childVariant}>😮</motion.span>
            <motion.span variants={childVariant}>🤣</motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="h-20 w-30 bg-blue-400 rounded-2xl p-2 "
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Emoji" : "Show Emoji"}
      </button>
    </div>
  );
}

export default Variant;
