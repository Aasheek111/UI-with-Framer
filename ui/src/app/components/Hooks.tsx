"use client";
import Image from "next/image";
import useFeature, { Feature } from "../hooks/useFeature";
import { useScroll } from "motion/react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
function Hooks() {
  const features: Feature[] = useFeature();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], //yedi thyo ref ko element ko start viewport ko end ma aaye start ani start ma aaye end
  });

  const translate = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {});

  return (
    <div className=" flex min-h-screen bg-black justify-center items-center">
      <div className="flex flex-col gap-10  max-w-4xl mx-auto py-10 " ref={ref}>
        {features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-20 items-center py-40"
          >
            <div className=" flex flex-col gap-5">
              {feature.icon}

              <h1 className="text-white text-2xl font-bold">{feature.title}</h1>
              <p className="text-neutral-500">{feature.description}</p>
            </div>
            <motion.div
              style={{
                y: translate,
                opacity: opacity,
              }}
            >
              <Image
                src={feature.image}
                alt="pic"
                height={500}
                className="w-100"
                width={500}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hooks;
