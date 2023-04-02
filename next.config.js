/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'dofus/fr',
        permanent: true,
      },
      
    ]
  },
}



module.exports = nextConfig


