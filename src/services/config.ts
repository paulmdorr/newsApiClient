export default {
  development: {
    baseUrl: 'http://localhost:3000',
  },
  staging: {},
  production: {
    baseUrl: 'http://192.168.0.10:3000',
  },
}[process.env.NODE_ENV]
