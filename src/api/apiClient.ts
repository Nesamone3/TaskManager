import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Set up a singleton instance of axios
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Task API calls
export const getTasks = async () => {
  return await apiClient.get('/tasks');
};

export const getTaskById = async (id: string) => {
  return await apiClient.get(`/tasks/${id}`);
};

export const createTask = async (taskData: object) => {
  return await apiClient.post('/tasks', taskData);
};

export const updateTask = async (id: string, taskData: object) => {
  return await apiClient.put(`/tasks/${id}`, taskData);
};

export const deleteTask = async (id: string) => {
  return await apiClient.delete(`/tasks/${id}`);
};

// need to define the rest

// Export all functions as a module
export default {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  // need to export everything...
};
