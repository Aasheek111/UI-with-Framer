import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images:{
  remotePatterns:[

    {
      hostname :"images.unsplash.com"
    },
    {
      hostname :"upload.wikimedia.org"
    },
    {
     hostname: "picsum.photos" 
    }
  ]
}
  /* config options here */
};

export default nextConfig;
