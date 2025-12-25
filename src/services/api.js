import axios from "axios";

// Base URL comes from environment variable
// Local dev  → http://localhost:8000
// Production → https://api.yourdomain.com OR Railway URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // important for sessions / cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: request interceptor (debug / auth later)
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Optional: response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
