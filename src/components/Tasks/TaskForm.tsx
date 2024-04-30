import React, { useState, useEffect } from 'react';
import apiClient from '../../api/apiClient';

interface TaskFormProps {
  task?: Task; // Optional task for editing
  onSave: () => void; // Callback to trigger after save
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { title, description, completed };

    const apiMethod = task ? apiClient.updateTask(task.id, data) : apiClient.createTask(data);
    apiMethod.then(() => {
      alert('Task saved successfully!');
      onSave();
    }).catch(error => {
      alert('Failed to save the task!');
      console.error('Task save error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
