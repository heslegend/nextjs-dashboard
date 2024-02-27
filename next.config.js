/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/about',
            destination: '/',
            permanent: true,
          },
          // Wildcard path matching
          {
            source: '/acceptInvitation/:slug',
            destination: '/news/:slug',
            permanent: true,
          },
        ]
      },
};

module.exports = nextConfig;
