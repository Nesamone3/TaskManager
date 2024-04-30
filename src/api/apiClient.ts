import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

// Set up a singleton instance of axios
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Method to fetch task summary
const getTaskSummary = () => apiClient.get('/tasks/summary');
// Method to fetch analytics data
const getAnalyticsData = () => apiClient.get('/analytics/data');

// Task-related API calls
const getTasks = () => apiClient.get('/tasks');
const getTaskById = (id: number) => apiClient.get(`/tasks/${id}`);
const createTask = (taskData: object) => apiClient.post('/tasks', taskData);
const updateTask = (id: number, taskData: object) => apiClient.put(`/tasks/${id}`, taskData);
const deleteTask = (id: number) => apiClient.delete(`/tasks/${id}`);

// Status-related API calls
const getStatuses = () => apiClient.get('/statuses');
const getStatusById = (id: number) => apiClient.get(`/statuses/${id}`);
const createStatus = (statusData: object) => apiClient.post('/statuses', statusData);
const updateStatus = (id: number, statusData: object) => apiClient.put(`/statuses/${id}`, statusData);
const deleteStatus = (id: number) => apiClient.delete(`/statuses/${id}`);

// Tag-related API calls
const getTags = () => apiClient.get('/tags');
const getTagById = (id: number) => apiClient.get(`/tags/${id}`);
const createTag = (tagData: object) => apiClient.post('/tags', tagData);
const updateTag = (id: number, tagData: object) => apiClient.put(`/tags/${id}`, tagData);
const deleteTag = (id: number) => apiClient.delete(`/tags/${id}`);

// Activity-related API calls
const getActivities = () => apiClient.get('/activities');
const getActivityById = (id: number) => apiClient.get(`/activities/${id}`);
const createActivity = (activityData: object) => apiClient.post('/activities', activityData);
const updateActivity = (id: number, activityData: object) => apiClient.put(`/activities/${id}`, activityData);
const deleteActivity = (id: number) => apiClient.delete(`/activities/${id}`);

// Activity Type-related API calls
const getActivityTypes = () => apiClient.get('/activity-types');
const getActivityTypeById = (id: number) => apiClient.get(`/activity-types/${id}`);
const createActivityType = (activityTypeData: object) => apiClient.post('/activity-types', activityTypeData);
const updateActivityType = (id: number, activityTypeData: object) => apiClient.put(`/activity-types/${id}`, activityTypeData);
const deleteActivityType = (id: number) => apiClient.delete(`/activity-types/${id}`);

export default {
  getAnalyticsData,
  getTaskSummary,
  getActivities,
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus,
  getTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
  getActivityTypes,
  getActivityTypeById,
  createActivityType,
  updateActivityType,
  deleteActivityType,
};