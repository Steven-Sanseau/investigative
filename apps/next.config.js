// function moduleExists(name) {
//   try {
//     return require.resolve(name)
//   } catch (error) {
//     return false
//   }
// }
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

// const nextConfig = {
//   target: 'serverless',
//   workboxOpts: {
//     swDest: 'static/service-worker.js',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'https-calls',
//           networkTimeoutSeconds: 15,
//           expiration: {
//             maxEntries: 150,
//             maxAgeSeconds: 30 * 24 * 60 * 60,
//           },
//           cacheableResponse: {
//             statuses: [0, 200],
//           },
//         },
//       },
//     ],
//   },
// }

module.exports = withPlugins([
  // ...(moduleExists('next-offline') ? [withOffline, nextConfig] : [nextConfig]),
  [
    withTM,
    {
      transpileModules: ['expo-next-react-navigation'],
    },
  ],
  withFonts,
  withImages,
  [withExpo, { projectRoot: __dirname }],
])
