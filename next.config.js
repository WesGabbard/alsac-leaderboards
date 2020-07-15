const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    BASE_URL: 'https://fundraising.qa.stjude.org',
    ADMIN_USERNAME: '',
    ADMIN_PASSWORD: '',
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/fundraisers': { page: '/fundraisers' },
      '/teams': { page: '/teams' },
      '/events': { page: '/events' }
    }
  }
})
