import axios from 'axios';

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetcher.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  },
);
