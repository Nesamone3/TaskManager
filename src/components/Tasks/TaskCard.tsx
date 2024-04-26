import React from 'react';

const TaskCard: React.FC = () => {
  return (
    <div className="task-card">
      <h3 className="task-title">Task 1: Introduction to Figma</h3>
      <p className="task-content">Learn what is Figma, what it's used for and how to do basic things in Figma.</p>
      <div className="task-actions">
        <button className="edit">Edit</button>
        <button className="view">View</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
