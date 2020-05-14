const axios = require('axios');

const baseURL =
  typeof window === 'object' ? '/api/v1' : 'http://localhost:3000/api/v1';

/* istanbul ignore next */
module.exports = axios.create({
  baseURL,
  // This allows for each caller component to handle errors
  validateStatus: () => true,
  headers: {
    Accept: 'application/json',
  },
  timeout: 5e3,
});
