import axios from 'axios';

export const baseURL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: baseURL,
});

export default api;

