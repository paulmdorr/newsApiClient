export default {
  development: {
    baseUrl: 'http://localhost:3000',
  },
  staging: {},
  production: {},
}[process.env.NODE_ENV]
