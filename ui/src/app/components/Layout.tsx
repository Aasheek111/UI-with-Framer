import { div } from "motion/react-client";
import Image from "next/image";
import React from "react";

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
      title: "Halo – Beyoncé",
      description: "A soaring pop ballad with emotional depth.",
      ctaTitle: "Learn more",
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
      title: "Perfect – Ed Sheeran",
      description: "A romantic acoustic ballad loved globally.",
      ctaTitle: "Learn more",
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
      title: "Lover – Taylor Swift",
      description: "A dreamy pop love song full of warmth.",
      ctaTitle: "Learn more",
      ctaLink: "https://en.wikipedia.org/wiki/Taylor_Swift",
      imageSource: "https://picsum.photos/seed/taylor/600/800",
      content: () => (
        <p>
          “Lover” captures Taylor Swift’s signature narrative lyricism, painting
          a picture of intimacy and emotional connection. The song blends retro
          warmth with modern pop and stands out as one of her most heartfelt
          tracks.
        </p>
      ),
    },

    {
      title: "7 rings – Ariana Grande",
      description: "A trap-pop anthem about confidence and luxury.",
      ctaTitle: "Learn more",
      ctaLink: "https://en.wikipedia.org/wiki/Ariana_Grande",
      imageSource: "https://picsum.photos/seed/ariana/600/800",
      content: () => (
        <p>
          “7 rings” merges hip-hop production with Ariana Grande’s pop vocals,
          inspired by friendship, empowerment, and independence. Its catchy
          melody, bold attitude, and luxurious aesthetic made it a global chart
          topper.
        </p>
      ),
    },

    {
      title: "Bad Guy – Billie Eilish",
      description: "A quirky dark-pop hit with heavy bass.",
      ctaTitle: "Learn more",
      ctaLink: "https://en.wikipedia.org/wiki/Billie_Eilish",
      imageSource: "https://picsum.photos/seed/billie/600/800",
      content: () => (
        <p>
          “Bad Guy” exemplifies Billie Eilish’s experimental pop style with its
          minimal production, whisper-like vocals, and bold lyrics. The song
          broke conventions and became a cultural moment worldwide.
        </p>
      ),
    },

    {
      title: "God’s Plan – Drake",
      description: "A melodic hip-hop track with positive themes.",
      ctaTitle: "Learn more",
      ctaLink: "https://en.wikipedia.org/wiki/Drake_(musician)",
      imageSource: "https://picsum.photos/seed/drake/600/800",
      content: () => (
        <p>
          “God’s Plan” blends Drake’s signature emotional rap style with
          uplifting themes about faith, success, and gratitude. Its music
          video’s charitable donations made the song even more impactful.
        </p>
      ),
    },

    {
      title: "Diamonds – Rihanna",
      description: "A powerful vocal-driven pop anthem.",
      ctaTitle: "Learn more",
      ctaLink: "https://en.wikipedia.org/wiki/Rihanna",
      imageSource: "https://picsum.photos/seed/rihanna/600/800",
      content: () => (
        <p>
          “Diamonds” highlights Rihanna’s vocal richness over shimmering
          production. Its uplifting message of shining bright through love and
          confidence made it a global chart-topping classic.
        </p>
      ),
    },

    {
      title: "Uptown Funk – Bruno Mars",
      description: "A funky retro-inspired hit packed with energy.",
      ctaTitle: "Learn more",
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
      ctaTitle: "Learn more",
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
      title: "Blinding Lights – The Weeknd",
      description: "A synthwave pop hit inspired by the 80s.",
      ctaTitle: "Learn more",
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

  return (
    <div>
      {card.map((card, ind) => (
        <div key={ind}>
          <div>
            
            <Image src={card.imageSource} alt="img" height={500} width={500} />
          </div>

          <div></div>
        </div>
      ))}
    </div>
  );
}

export default LayoutUI;
