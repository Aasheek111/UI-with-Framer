import React, { ReactElement } from "react";
import { FaReact, FaCode, FaFire } from "react-icons/fa";


export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

function useFeature():Feature[] {
  const features: Feature[] = [
    {
      icon: <FaReact/>,
      title: "Lightning Fast",
      description:
        "Built with smooth, optimized performance.Build previously complex effects, like magnetic cursors or infinite scrolling tickers, with Motion+ components. These next-level Motion APIs are built for maximum performance and customisation.",
      image:
        "https://images.unsplash.com/photo-1581677996915-0bec0bb3a1a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: <FaCode/>,
      title: "Developer Friendly",
      description:
        "Clean structure, easy to extend, joy to build. Whether it's a unique cursor, an animated counter, or a split-text reveal: These components will save you hours of dev time.Building beautiful, performant animations is hard. You can waste hours tweaking curves, fighting AI with outdated information, or not knowing where to find help",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: <FaFire />,
      title: "Always Hot",
      description:
        "Fresh updates and spicy improvements.tutorials written by the creator of Motion will teach you the official best practices and core principles behind each effect.Building beautiful, performant animations is hard. You can waste hours tweaking curves, fighting AI with outdated information, or not knowing where to find help",
      image:
        "https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGZhc3R8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return features;
}

export default useFeature;
