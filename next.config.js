/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  basePath: "/ainda-tem-landing",
  assetPrefix: "/ainda-tem-landing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;


