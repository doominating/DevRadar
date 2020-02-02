import axios from 'axios';
// const dotenv = require('dotenv');
// dotenv.config();

const api = axios.create({
  baseURL: 'http://192.168.15.15:3333',//process.env.BACKEND_URL,
});

export default api;