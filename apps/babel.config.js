// @generated: @expo/next-adapter@2.0.11
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: ['@expo/next-adapter/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src/',
          components: './src/components',
        },
      },
    ],
  ],
}
