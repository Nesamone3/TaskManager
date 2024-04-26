const express = require('express');
const router = express.Router();
const activityTypeController = require('../controllers/activityTypeController');

// Route to get all activity types
router.get('/', activityTypeController.getAllActivityTypes);

// Route to get a single activity type by ID
router.get('/:id', activityTypeController.getActivityTypeById);

// Route to create a new activity type
router.post('/', activityTypeController.createActivityType);

// Route to update an existing activity type by ID
router.put('/:id', activityTypeController.updateActivityType);

// Route to delete an activity type by ID
router.delete('/:id', activityTypeController.deleteActivityType);

module.exports = router;
