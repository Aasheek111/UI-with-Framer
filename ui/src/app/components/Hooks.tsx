"use client";
import Image from "next/image";
import useFeature, { Feature } from "../hooks/useFeature";
import { useScroll } from "motion/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

function Hooks() {
  const features: Feature[] = useFeature();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2=useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start start", "end end"], //yedi thyo ref ko element ko start viewport ko end ma aaye start ani start ma aaye end
  });

  const translate = useSpring( useTransform(scrollYProgress, [0, 1], [200, -100]),{

    stiffness:100,
    damping:30,
    mass:1
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
const background=["#1b263b","#415a77" ,"#778da9"]


useMotionValueEvent(scrollYProgress,'change',(latest)=>{
  console.log(latest)
  if(latest>=0 && latest<0.33){
    setBg(background[Math.floor(latest*background.length)])
  }
  else if(latest>0.33&& latest<0.66){
    setBg(background[Math.floor(latest*background.length)])
  }
  else if(latest>0.66 && latest<=1){
    setBg(background[Math.floor(latest*background.length)])
  }
  else{
    setBg("gray")
  }


})
const [bg,setBg]=useState<string>("#1b263b");

  return (
    <div className=" flex min-h-screen bg-black justify-center items-center" style={{background:bg}} ref={ref2}>
      <div className="flex flex-col gap-10  max-w-4xl mx-auto py-10 " ref={ref1}>
        {features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-20 items-center py-40"
          >
            <motion.div
              className=" flex flex-col gap-5"
              style={{
                filter: useMotionTemplate`blur(${blur}px)`,
                scale: scale,
              }}
            >
              {feature.icon}

              <h1 className="text-white text-2xl font-bold">{feature.title}</h1>
              <p className="text-neutral-500">{feature.description}</p>
            </motion.div>
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
