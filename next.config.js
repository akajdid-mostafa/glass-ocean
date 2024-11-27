/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.unsplash.com', 'firebasestorage.googleapis.com'], // Add all required domains here
//   },
// };

// module.exports = nextConfig;
const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'firebasestorage.googleapis.com'], // Add all required domains here
  },
};
 
module.exports = withNextIntl(nextConfig);