"use client";
import Image from "next/image";
import { Fa500Px, FaReact, FaCode, FaFire } from "react-icons/fa";
function Hooks() {
  type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
  };

  const features: Feature[] = [
    {
      icon: <FaReact />,
      title: "Lightning Fast",
      description: "Built with smooth, optimized performance.",
      image:
        "https://images.unsplash.com/photo-1581677996915-0bec0bb3a1a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzdCUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: <FaCode />,
      title: "Developer Friendly",
      description: "Clean structure, easy to extend, joy to build.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: <FaFire />,
      title: "Always Hot",
      description: "Fresh updates and spicy improvements.",
      image:
        "https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMGZhc3R8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className=" flex min-h-screen bg-black justify-center items-center">
      <div className="flex flex-col gap-10 ">
        {features.map((feature: Feature, index: number) => (
          <div key={index} className="grid grid-cols-2 gap-20">
            <div>
              {feature.icon}

              {feature.description}
              {feature.title}
            </div>
            <div>
              <Image src={feature.image} alt="pic" height={500} className="w-100" width={500} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hooks;
