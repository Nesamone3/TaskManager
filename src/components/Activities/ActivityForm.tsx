import React, { useState, FormEvent } from 'react';
import apiClient from '../../api/apiClient';

interface ActivityFormProps {
  activity?: {
    id: number;
    title: string;
    description: string;
    // other fields
  };
}

const ActivityForm: React.FC<ActivityFormProps> = ({ activity }) => {
  const [title, setTitle] = useState(activity ? activity.title : '');
  const [description, setDescription] = useState(activity ? activity.description : '');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data = { title, description };
    if (activity) {
      apiClient.updateActivity(activity.id, data)
        .then(() => alert('Activity updated!'))
        .catch(error => console.error('Updating activity failed:', error));
    } else {
      apiClient.createActivity(data)
        .then(() => alert('Activity created!'))
        .catch(error => console.error('Creating activity failed:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">{activity ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ActivityForm;
