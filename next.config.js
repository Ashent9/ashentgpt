/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://giftedgpt.vercel.app",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "http://giftedgpt.vercel.app",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
