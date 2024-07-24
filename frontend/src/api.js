import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this URL if needed
});

// Authentication
export const loginUser = async (data) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

// Posts
export const createPost = async (data) => {
  const response = await api.post('/posts', data);
  return response.data;
};

export const getPost = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};

export const updatePost = async (id, data) => {
  const response = await api.put(`/posts/${id}`, data);
  return response.data;
};
