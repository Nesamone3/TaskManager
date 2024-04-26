const { ActivityType } = require('../models');

const activityTypeController = {
  // Fetch all activity types
  async getAllActivityTypes(req, res) {
    try {
      const activityTypes = await ActivityType.findAll();
      res.json(activityTypes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get a single activity type by ID
  async getActivityTypeById(req, res) {
    try {
      const { id } = req.params;
      const activityType = await ActivityType.findByPk(id);
      if (!activityType) {
        return res.status(404).json({ error: 'Activity type not found' });
      }
      res.json(activityType);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new activity type
  async createActivityType(req, res) {
    try {
      const activityType = await ActivityType.create(req.body);
      res.status(201).json(activityType);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update an existing activity type
  async updateActivityType(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await ActivityType.update(req.body, { where: { id } });
      if (updatedRows) {
        const updatedActivityType = await ActivityType.findByPk(id);
        res.json(updatedActivityType);
      } else {
        res.status(404).json({ error: 'Activity type not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete an activity type
  async deleteActivityType(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ActivityType.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send('Activity type deleted');
      } else {
        res.status(404).send('Activity type not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = activityTypeController;
