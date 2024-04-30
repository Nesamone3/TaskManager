import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';
import ActivityList from '../components/Activities/ActivityList';
import AnalyticsChart from '../components/Analytics/AnalyticsChart';

const AppRoutes: React.FC = () => {
  // Define useNavigate here
  const navigate = useNavigate();

  // Define the onSave function
  const onSave = () => {
    navigate('/tasks'); // Navigate back to tasks list after save
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm onSave={onSave} />} />
        <Route path="/tasks/edit/:taskId" element={<TaskForm onSave={onSave} />} />
        <Route path="/activities" element={<ActivityList />} />
        <Route path="/analytics" element={<AnalyticsChart />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
