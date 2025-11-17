import React, { useEffect } from "react";
import { useAnimate } from "motion/react";

function Hooks() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".useanimate", { opacity: 1 }, { duration:2 });
  }, []);

  return (
    <div ref={scope} className="  h-screen w-full bg-amber-400 flex justify-center items-center">
      <div className="useanimate  opacity-0 h-50 w-50 bg-black rounded-4xl"></div>
    </div>
  );
}

export default Hooks;
