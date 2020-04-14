const { withExpo } = require('@expo/next-adapter')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
const nextOfflineConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withPlugins([
  [
    withTM,
    {
      transpileModules: ['expo-next-react-navigation'],
    },
  ],
  withImages,
  // withBundleAnalyzer,
  ...(process.env.NODE_ENV === 'production'
    ? [withOffline, nextOfflineConfig]
    : [nextOfflineConfig]),
  [withExpo, { projectRoot: __dirname }],
])
