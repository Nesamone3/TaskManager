const { Tag } = require('../models');

const tagController = {
  // Get all tags
  async getTags(req, res) {
    try {
      const tags = await Tag.findAll();
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single tag by id
  async getTagById(req, res) {
    try {
      const { id } = req.params;
      const tag = await Tag.findByPk(id);
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      res.json(tag);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new tag
  async createTag(req, res) {
    try {
      const tag = await Tag.create(req.body);
      res.status(201).json(tag);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a tag
  async updateTag(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Tag.update(req.body, {
        where: { id }
      });
      if (updatedRows) {
        const updatedTag = await Tag.findByPk(id);
        res.json(updatedTag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a tag
  async deleteTag(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Tag.destroy({
        where: { id }
      });
      if (deleted) {
        res.status(204).send('Tag deleted');
      } else {
        res.status(404).send('Tag not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = tagController;
