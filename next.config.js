const { withExpo } = require('@expo/next-adapter')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')(['expo-next-react-navigation'])
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
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
  [withTM],
  withImages,
  withBundleAnalyzer,
  ...(process.env.NODE_ENV === 'production'
    ? [withOffline, nextOfflineConfig]
    : [nextOfflineConfig]),
  [
    withExpo,
    {
      projectRoot: __dirname,
      experimental: {
        reactRefresh: true,
      },
      typescript: {
        // ignoreDevErrors: true,
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        //
        // This option is rarely needed, and should be reserved for advanced
        // setups. You may be looking for `ignoreDevErrors` instead.
        // !! WARN !!
        // ignoreBuildErrors: true,
      },
    },
  ],
])
