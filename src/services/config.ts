export default {
  development: {
    baseUrl: 'http://localhost:3000',
  },
  staging: {},
  production: {
    baseUrl: 'https://newsapiclient.paulmdorr.now.sh',
  },
}[process.env.NODE_ENV]
