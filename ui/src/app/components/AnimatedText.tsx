import { easeInOut, useAnimate } from "motion/react";
import React, { useEffect } from "react";
import { motion, stagger } from "framer-motion";

function AnimatedText() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere incidunt repellat nostrum voluptatibus placeat temporibus labore minima, commodi dicta qui hic dolor maxime quo ipsa voluptatum doloribus natus quod!";

  const [scope, animate] = useAnimate();

  const startAnimating = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.5, delay: stagger(0.03) }
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);

  return (
    <div className="w-full h-screen bg-black p-20" ref={scope}>
      {/* <motion.span
        className="text-4xl max-w-4xl mx-auto "
        style={{
          opacity: 0,
        }}
      >
        {text}
      </motion.span> */}
      <div className="mx-auto max-w-4xl text-4xl font-semibold">
        {text.split(" ").map((char, index) => (
          <span
            key={index}
            style={{
              opacity: 0,
              filter: "blur(10px)",
              transform: "translateY(20px)",
            }}
            className=" inline-block "
          >
            {char}&nbsp;{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AnimatedText;
