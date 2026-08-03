import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL 
    ? `${import.meta.env.VITE_API_URL}/api` 
    : "http://127.0.0.1:5555/api",
});

// Automatically send JWT token if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Auth Endpoints
export const loginUser = (credentials) => API.post("/login", credentials);
export const registerUser = (userData) => API.post("/register", userData);

// Properties Endpoints
export const getProperties = () => API.get("/properties");
export const addProperty = (propertyData) => API.post("/properties", propertyData);
export const updateProperty = (id, propertyData) => API.put(`/properties/${id}`, propertyData); // Fixed double /api
export const deleteProperty = (id) => API.delete(`/properties/${id}`); // Fixed double /api

// Saved Properties
export const getSavedProperties = () => API.get("/saved-properties");
export const saveProperty = (propertyId) => API.post("/saved-properties", { property_id: propertyId });
export const removeSavedProperty = (id) => API.delete(`/saved-properties/${id}`); // Fixed double /api

// Appointments Endpoints
export const getAppointments = () => API.get("/appointments");
export const getAdminAppointments = () => API.get("/appointments/admin"); 
export const createAppointment = (appointmentData) => API.post("/appointments", appointmentData);
export const cancelAppointment = (id) => API.delete(`/appointments/${id}`); // Fixed double /api

// Admin User Management
export const getUsers = () => API.get("/users");
export const deleteUser = (id) => API.delete(`/users/${id}`); // Fixed double /api

export default API;