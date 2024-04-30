// Gets analytic data, imports and calls it.
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import apiClient from '../../api/apiClient';

const AnalyticsChart: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    apiClient.getAnalyticsData()
      .then(response => setData(response.data))
      .catch(error => console.error('Failed to fetch analytics data:', error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
