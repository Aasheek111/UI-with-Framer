"use client";
import { useAnimate, motion } from "motion/react";

import React from "react";

function AnimationSequence() {
  const [scope, animate] = useAnimate();

  const startAnimating = async() => {
    animate(
      "button",
      { width: "5rem",borderRadius:'50rem'},
      {
        duration: 0.3,
      }
    );
    await animate(
      "button",
      { },
      {
        duration: 0.3,
      }
    );
    animate(
      "span",
      { display:'none' },
      {
        duration: 0.1,
      }
    );
  };
  return (
    <div
      className="h-screen w-full flex relative justify-center items-center"
      ref={scope}
    >
      <motion.button
        style={{ width: "30rem" }}
        onClick={() => startAnimating()}
        className=" h-20 rounded-lg bg-purple-700  text-white text-xl cursor-pointer "
      >
        <motion.span>Purchase Now(135$)</motion.span>
      </motion.button>
    </div>
  );
}

export default AnimationSequence;
