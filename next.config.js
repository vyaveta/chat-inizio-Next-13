/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
    swcPlugins: [
        ['next-superjson-plugin', {}]
    ]
},
images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ]
  }
},
);

// const nextConfig = {
//     experimental: {
//         appDir: true,
//         swcPlugins: [
//             ['next-superjson-plugin', {}]
//         ]
//     },
//     images: {
//         domains: [
//           "avatars.githubusercontent.com",
//           "lh3.googleusercontent.com",
//           "res.cloudinary.com",
//         ]
//       }
// }

module.exports = nextConfig
