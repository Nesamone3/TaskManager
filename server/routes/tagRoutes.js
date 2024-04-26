const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// Route to get all tags
router.get('/', tagController.getTags);

// Route to get a single tag by id
router.get('/:id', tagController.getTagById);

// Route to create a new tag
router.post('/', tagController.createTag);

// Route to update an existing tag by id
router.put('/:id', tagController.updateTag);

// Route to delete a tag by id
router.delete('/:id', tagController.deleteTag);

module.exports = router;
