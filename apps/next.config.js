// const withOffline = require('next-offline')
const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: ['expo-next-react-navigation'],
    },
  ],
  withFonts,
  withImages,
  // [
  //   withOffline,
  //   {
  //     workboxOpts: {
  //       swDest: 'workbox-service-worker.js',
  //       /* changing any value means you'll have to copy over all the defaults  */
  //       /* next-offline */
  //       globPatterns: ['static/**/*'],
  //       globDirectory: '.',
  //       runtimeCaching: [
  //         {
  //           urlPattern: /^https?.*/,
  //           handler: 'NetworkFirst',
  //           options: {
  //             cacheName: 'offlineCache',
  //             expiration: {
  //               maxEntries: 200,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ],
  [withExpo, { projectRoot: __dirname }],
])
