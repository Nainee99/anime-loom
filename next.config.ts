// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shikimori.one",
        pathname: "**",
      },
    ],
  },
};
