const Tower = require("../models/towerModel");

exports.createTower = async (req, res) => {
  const { name, location } = req.body;
  try {
    const tower = new Tower({ name, location, owner: req.user.id });
    await tower.save();
    res.status(201).json(tower);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTowers = async (req, res) => {
  try {
    const towers = await Tower.find({ owner: req.user.id });
    res.status(200).json(towers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
