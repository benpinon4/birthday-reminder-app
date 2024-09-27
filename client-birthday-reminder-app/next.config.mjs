/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites: async () => {
    return [{ source: "/:any", destination: "/" }];
  },
};

export default nextConfig;
