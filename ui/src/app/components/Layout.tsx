import { button, div } from "motion/react-client";
import Image from "next/image";
import { motion } from "motion/react";
import React, { useState } from "react";

function LayoutUI() {
  type Card = {
    title: string;
    description: string;
    imageSource: string;
    ctaLink: string;
    ctaTitle: string;
    content: () => React.ReactNode;
  };

  const card: Card[] = [
    {
      title: "Perfect – Ed Sheeran",
      description: "A romantic acoustic ballad loved globally.",
      ctaTitle: "Play",
      ctaLink: "https://en.wikipedia.org/wiki/Ed_Sheeran",
      imageSource: "https://picsum.photos/seed/ed/600/800",
      content: () => (
        <p>
          “Perfect” is Ed Sheeran’s modern romantic classic, written as a
          timeless love song. With soft acoustic melody and heartfelt lyrics, it
          has become a wedding staple and one of Sheeran’s biggest global hits.
        </p>
      ),
    },

    {
      title: "Uptown Funk – Bruno Mars",
      description: "A funky retro-inspired hit packed with energy.",
      ctaTitle: "Play",
      ctaLink: "https://en.wikipedia.org/wiki/Bruno_Mars",
      imageSource: "https://picsum.photos/seed/bruno/600/800",
      content: () => (
        <p>
          “Uptown Funk” revives 80s funk vibes with modern pop flair. Bruno
          Mars’ charismatic vocals, energetic performance style, and infectious
          rhythm helped this song dominate global charts.
        </p>
      ),
    },

    {
      title: "Hello – Adele",
      description: "A soulful piano ballad about reflection.",
      ctaTitle: "Play",
      ctaLink: "https://en.wikipedia.org/wiki/Adele",
      imageSource: "https://picsum.photos/seed/adele/600/800",
      content: () => (
        <p>
          “Hello” became one of Adele’s most iconic releases, combining intense
          emotional storytelling with soaring vocals. The track marked her
          return to music and resonated deeply across the world.
        </p>
      ),
    },
    {
      title: "Halo – Beyoncé",
      description: "A soaring pop ballad with emotional depth.",
      ctaTitle: "Play",
      ctaLink: "https://en.wikipedia.org/wiki/Beyonc%C3%A9",
      imageSource: "https://picsum.photos/seed/beyonce/600/800",
      content: () => (
        <p>
          “Halo” showcases Beyoncé’s powerful vocals wrapped in lush production.
          The song blends soft piano, airy atmosphere, and emotional themes of
          love, redemption, and vulnerability. It remains one of her most iconic
          ballads, celebrated worldwide.
        </p>
      ),
    },

    {
      title: "Blinding Lights – The Weeknd",
      description: "A synthwave pop hit inspired by the 80s.",
      ctaTitle: "Play",
      ctaLink: "https://en.wikipedia.org/wiki/The_Weeknd",
      imageSource: "https://picsum.photos/seed/weeknd/600/800",
      content: () => (
        <p>
          “Blinding Lights” is The Weeknd’s retro-pop masterpiece, blending neon
          synths, driving beats, and emotional lyrics. It became one of the most
          successful songs of the decade.
        </p>
      ),
    },
  ];

  const [current, setCurrent] = useState<Card | null>(null);
  console.log(current);

  return (
    <div className="py-5 min-h-screen  bg-neutral-300 px-10  justify-center flex flex-col items-center">
      {current && (
        <div
          className=" inset-0 h-full w-full fixed z-10 backdrop-blur-sm  bg-black/50"
          onClick={() => setCurrent(null)}
        ></div>
      )}

      {current && (
        <motion.div
          className="flex fixed h-[90vh] w-sm  flex-col p-8 z-20 rounded-2xl bg-neutral-200"
          layoutId={`card-title-${current.title}`}
        >
          <div>
            <motion.img
              layoutId={`card-img-${current.title}`}
              src={current.imageSource}
              alt="pic"
              height={500}
              width={500}
              className="aspect-square overflow-hidden h-80 w-80 rounded-2xl"
            />
          </div>

          <div className="flex justify-between my-5 ">
            <div>
              <motion.h2
                className="h-2xl text-black font-bold text-lg"
                layoutId={`card-text-${current.title}`}
              >
                {current.title}
              </motion.h2>

              <motion.p
                className="text-neutral-500"
                layoutId={`card-des-${current.title}`}
              >
                {current.description}
              </motion.p>
            </div>

            <button className=" bg-green-600 p-2 h-10 rounded-xl items-right cursor-pointer ">
              {current.ctaTitle}
            </button>
          </div>

          <div>
            <div className="text-neutral-600 text-xs">{current.content()}</div>
          </div>
        </motion.div>
      )}
      <div className="min-w-xl mx-auto ">
        {card.map((card, ind) => (
          <motion.div
            onClick={() => setCurrent(card)}
            key={ind}
            layoutId={`card-title-${card.title}`}
            className="flex  gap-4  my-5 rounded-2xl p-2 cursor-pointer items-center border shadow bg-neutral-200 shadow-neutral-400 hover:bg-neutral-300 "
          >
            <div className="h-20 w-25 overflow-hidden aspect-square rounded-xl ">
              <motion.img
                layoutId={`card-img-${card.title}`}
                src={card.imageSource}
                alt="img"
                height={500}
                width={500}
                className="  "
              />
            </div>

            <motion.div
              className="flex justify-between w-full"
              layoutId={`card-text-${card.title}`}
            >
              <div>
                <motion.h2 className="h-2xl text-black font-bold text-lg"
                  layoutId={`card-title-${card.title}`}
                
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  className="text-neutral-600 text-xs"
                  layoutId={`card-des-${card.title}`}
                >
                  {card.description}
                </motion.p>
              </div>

              <div>
                <button className=" bg-green-600 p-2 rounded-xl items-right cursor-pointer ">
                  {card.ctaTitle}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LayoutUI;
