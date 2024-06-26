const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));
app.use('/api/statuses', require('./routes/statusRoutes'));
app.use('/api/tags', require('./routes/tagRoutes'));
app.use('/api/activityTypes', require('./routes/activityTypeRoutes'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
