import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'http://localhost:8000';

function getAccessToken(): string | null {
  try {
    return localStorage.getItem('access');
  } catch {
    return null;
  }
}

export const http: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default http;


