const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

// Route to get all statuses
router.get('/', statusController.getStatuses);

// Route to get a single status by id
router.get('/:id', statusController.getStatusById);

// Route to create a new status
router.post('/', statusController.createStatus);

// Route to update an existing status by id
router.put('/:id', statusController.updateStatus);

// Route to delete a status by id
router.delete('/:id', statusController.deleteStatus);

module.exports = router;
