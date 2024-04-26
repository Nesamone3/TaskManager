const { Task, Status, Tag, Activity } = require('../models');

const taskController = {
  // Get all tasks
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.findAll({
        include: ['status', 'activity', 'tags'],
      });
      return res.json(tasks);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Create a new task
  async createTask(req, res) {
    try {
      const task = await Task.create(req.body);
      return res.status(201).json(task);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  // Update a task
  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Task.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedTask = await Task.findOne({ where: { id } });
        return res.status(200).json(updatedTask);
      }
      throw new Error('Task not found');
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Delete a task
  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Task.destroy({
        where: { id },
      });
      if (deleted) {
        return res.status(204).send("Task deleted");
      }
      throw new Error("Task not found");
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};

module.exports = taskController;