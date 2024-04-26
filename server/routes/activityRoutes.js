const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Route to get all activities
router.get('/', activityController.getAllActivities);

// Route to get a single activity by ID
router.get('/:id', activityController.getActivityById);

// Route to create a new activity
router.post('/', activityController.createActivity);

// Route to update an existing activity by ID
router.put('/:id', activityController.updateActivity);

// Route to delete an activity by ID
router.delete('/:id', activityController.deleteActivity);

module.exports = router;
