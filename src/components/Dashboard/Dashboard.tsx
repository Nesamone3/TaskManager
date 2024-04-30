import React from 'react';
import TaskSummary from './TaskSummary';
import ActivityList from '../Activities/ActivityList';
import AnalyticsChart from '../Analytics/AnalyticsChart';
import './dashboard.css';  

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <TaskSummary />
            <ActivityList />
            <AnalyticsChart />
        </div>
    );
};

export default Dashboard;
