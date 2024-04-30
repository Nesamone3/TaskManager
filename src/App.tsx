import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TaskList from './components/Tasks/TaskList';
import ActivityList from './components/Activities/ActivityList';
import AnalyticsChart from './components/Analytics/AnalyticsChart';
import './styles/main.scss';  

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/tasks">Tasks</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
            </ul>
          </nav>
        </header>
        
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/activities" element={<ActivityList />} />
          <Route path="/analytics" element={<AnalyticsChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
