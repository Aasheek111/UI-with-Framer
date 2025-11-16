"use client";
import { motion, useMotionValue, useTransform, useSpring, useScroll, useAnimationControls } from "framer-motion";
import { useRef } from "react";

export default function MotionCard() {
  const x = useMotionValue(0);                  // Track drag
  const rotate = useTransform(x, [-150, 150], [-15, 15]); // Map drag to rotation
  const springX = useSpring(x, { stiffness: 120, damping: 12 }); // Smooth drag release

  const controls = useAnimationControls();     // Manual control
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref }); // Scroll hook

  // Change background color based on scroll progress
  const bg = useTransform(scrollYProgress, [0, 1], ["#222", "#444"]);

  const runSequence = async () => {
    await controls.start({ scale: 1.1, transition: { duration: 0.2 } });
    await controls.start({ scale: 1, rotate: 3 });
    await controls.start({ rotate: 0 });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 p-10" ref={ref}>
      <motion.div
        style={{
          x: springX,
          rotate,
          background: bg,
        }}
        drag="x"
        dragConstraints={{ left: -150, right: 150 }}
        className="w-80 h-48 rounded-2xl shadow-2xl flex items-center justify-center text-white text-xl font-semibold"
        animate={controls}
      >
        Drag Me 🎉
      </motion.div>

      <button
        onClick={runSequence}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-500"
      >
        Run Animation
      </button>
    </div>
  );
}
