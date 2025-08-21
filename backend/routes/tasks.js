const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ order: 1 });
  res.json(tasks);
});

// POST new task
router.post("/", async (req, res) => {
  const { title, duration } = req.body;
  const newTask = new Task({ title, duration });
  await newTask.save();
  res.json(newTask);
});

module.exports = router;
