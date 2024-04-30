import React, { useEffect, useState } from 'react';
import apiClient from '../../api/apiClient';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    apiClient.getTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
