/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination:
          "/posts/hagerty-radical-cup-uk-round-2-brands-hatch-post-race-report",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xolxpmsolrrgibqyafao.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/media/radical/**",
      },
    ],
  },
};

export default nextConfig;
