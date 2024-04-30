import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';

const TaskSummary: React.FC = () => {
    const [summary, setSummary] = useState({ total: 0, completed: 0, pending: 0 });

    useEffect(() => {
        apiClient.getTaskSummary()
            .then(response => setSummary(response.data))
            .catch(error => console.error('Error fetching task summary:', error));
    }, []);

    return (
        <div>
            <h3>Task Summary</h3>
            <p>Total Tasks: {summary.total}</p>
            <p>Completed: {summary.completed}</p>
            <p>Pending: {summary.pending}</p>
        </div>
    );
};

export default TaskSummary;
