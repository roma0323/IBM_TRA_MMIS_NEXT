/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_PUBLIC_CONFIG === "prod" ? "export" : "standalone",
  // output:  "export" ,
  basePath: "",
  assetPrefix: "",
  images: {
    loader: "imgix",
    path: process.env.BASEPATH,
    unoptimized: true,
  },
  env: {
    BASEPATH: process.env.BASEPATH,
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

export default nextConfig;
