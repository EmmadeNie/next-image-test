
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
    loader: 'default',
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};