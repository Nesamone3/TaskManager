import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';
import ActivityCard from './ActivityCard';

interface Activity {
    id: number;
    title: string;
    description: string;
}

const ActivityList: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        apiClient.getActivities()
            .then(response => {
                setActivities(response.data);
            })
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    return (
        <div>
            {activities.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
            ))}
        </div>
    );
};

export default ActivityList;