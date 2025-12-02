"use client";
import { useAnimate, motion } from "motion/react";
import { GrStatusGood } from "react-icons/gr";
import React from "react";

function AnimationSequence() {
  const [scope, animate] = useAnimate();

  const startAnimating = async () => {
    animate(
      "span",
      { display: "none" },
      {
        duration: 0,
      }
    );
    await animate(
      ".load",
      {
        opacity: 1,
      },
      {
        duration: 0.8,
      }
    );

    await animate(".load", {
      opacity: 0,
    });
    await animate(
      "button",
      { width: "5rem", borderRadius: "50rem" },
      {
        duration: 0.2,
      }
    );

    await animate(
      "button",
      { scale: [1, 1.2, 0.8, 1], background: "#1CD62E" },
      {
        duration: 0.3,
      }
    );

    await animate(
      ".tick",
      { opacity: 1 },
      {
        duration: 0.3,
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
        className=" h-20 rounded-lg bg-purple-700 relative text-white text-xl cursor-pointer  flex justify-center items-center"
      >
        <div className="absoulte inset-0">
          <motion.span>Purchase Now(135$)</motion.span>
        </div>

        <div className="tick absolute opacity-0 inset-0 p-1">
          <GrStatusGood className="p-1" size={70} />
        </div>

        <div className=" load absoulte inset-0 opacity-0">Loading.....</div>
      </motion.button>
    </div>
  );
}

export default AnimationSequence;
