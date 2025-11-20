import axios from "axios";

// Create axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1",
  headers: { "Content-Type": "application/json" },
});

// Request interceptor to attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Optional: Response interceptor for handling expired tokens or errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Token expired or invalid.");
      localStorage.removeItem("token");
      // Optionally redirect to login or refresh token
    }
    return Promise.reject(error);
  },
);

export default apiClient;
