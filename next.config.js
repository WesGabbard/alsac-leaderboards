const withCSS = require('@zeit/next-css')

//using dir env to load env variables locally but keep out of source control, replace with your own
module.exports = withCSS({
  env: {
    BASE_URL: 'https://fundraising.qa.stjude.org', // LO instance
    ADMIN_USERNAME: process.env.API_USERNAME, // add your api admin username here
    ADMIN_PASSWORD: process.env.API_PASSWORD, // add you api admin password here
    API_KEY: process.env.ENV_API_KEY //api key for LO instance
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
