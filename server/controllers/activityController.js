const { Activity, Task, Tag } = require('../models');

const activityController = {
  // Get all activities
  async getAllActivities(req, res) {
    try {
      const activities = await Activity.findAll({
        include: [
          { model: Task, as: 'tasks' },
          { model: Tag, as: 'tags' } // Assumes a many-to-many relationship with a join table
        ]
      });
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single activity by ID
  async getActivityById(req, res) {
    try {
      const { id } = req.params;
      const activity = await Activity.findByPk(id, {
        include: ['tasks', 'tags'] // Including associated tasks and tags
      });
      if (!activity) {
        return res.status(404).json({ error: 'Activity not found' });
      }
      res.json(activity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new activity
  async createActivity(req, res) {
    try {
      const activity = await Activity.create(req.body);
      res.status(201).json(activity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update an activity
  async updateActivity(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Activity.update(req.body, {
        where: { id }
      });
      if (updatedRows) {
        const updatedActivity = await Activity.findByPk(id);
        res.json(updatedActivity);
      } else {
        res.status(404).json({ error: 'Activity not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete an activity
  async deleteActivity(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Activity.destroy({
        where: { id }
      });
      if (deleted) {
        res.status(204).send('Activity deleted');
      } else {
        res.status(404).send('Activity not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = activityController;
