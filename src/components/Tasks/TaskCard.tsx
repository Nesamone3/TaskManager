import React from 'react';

interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
}

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default TaskCard;
