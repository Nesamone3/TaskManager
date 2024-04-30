import React from 'react';

interface ActivityProps {
  activity: {
    id: number;
    title: string;
    description: string;
    // add other necessary fields
  };
}

const ActivityCard: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <div>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      {/* Add other elements as needed */}
    </div>
  );
};

export default ActivityCard;
