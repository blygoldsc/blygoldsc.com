// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'BlygoldSC',
  siteUrl: 'https://www.blygoldsc.com/',
  siteDescription:
    'BlygoldSC provides custom HVAC component coating to commercial distributors and installation contractors.',
  titleTemplate: 'BlygoldSC — %s',

  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/image')
  },

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ]
}
