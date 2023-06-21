import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.API_URL, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TOKEN}`, // Replace with your default token
  },
});

export default axiosInstance;
