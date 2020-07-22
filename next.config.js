const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    BASE_URL: 'https://fundraising.qa.stjude.org',
    ADMIN_USERNAME: process.env.API_USERNAME, // add your api admin username here
    ADMIN_PASSWORD: process.env.API_PASSWORD, // add you api admin password here
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/fundraisers' },
      '/fundraisers': { page: '/fundraisers' },
      '/teams': { page: '/teams' },
      '/events': { page: '/events' }
    }
  }
})
