import axios from 'axios';

//local
// export const baseURL = import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8080'
//prod
export const baseURL = 'https://backend-asbaf.vercel.app/'


const api = axios.create({
  baseURL: baseURL,
});

export default api;

