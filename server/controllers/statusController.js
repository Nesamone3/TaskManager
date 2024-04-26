const { Status } = require('../models');

// Gets status
const statusController = {
  async getStatuses(req, res) {
    try {
      const statuses = await Status.findAll();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Creates status
  async createStatus(req, res) {
    try {
      const status = await Status.create(req.body);
      res.status(201).json(status);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Updates status
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Status.update(req.body, { where: { id } });
      if (updated) {
        const updatedStatus = await Status.findOne({ where: { id } });
        res.status(200).json(updatedStatus);
      } else {
        throw new Error('Status not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // deletes status
  async deleteStatus(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Status.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send('Status deleted');
      } else {
        throw new Error('Status not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = statusController;
