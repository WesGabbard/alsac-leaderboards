const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    BASE_URL: 'https://fundraising.qa.stjude.org',
    ADMIN_USERNAME: 'wesadmin',
    ADMIN_PASSWORD: 'wesadmin',
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
