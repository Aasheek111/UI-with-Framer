"use client";
import Image from "next/image";
import useFeature ,{Feature} from "../hooks/useFeature"
function Hooks() {
const features:Feature[]=useFeature();


  return (
    <div className=" flex min-h-screen bg-black justify-center items-center">
      <div className="flex flex-col gap-10  max-w-4xl mx-auto py-40 ">
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
            <div>
              <Image
                src={feature.image}
                alt="pic"
                height={500}
                className="w-100"
                width={500}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hooks;
