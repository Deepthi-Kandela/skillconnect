const Worker = require('../models/workerModel');

exports.getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkerById = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    if (!worker) return res.status(404).json({ message: 'Worker not found' });
    res.json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchWorkers = async (req, res) => {
  try {
    const { category, location } = req.query;
    let query = {};
    if (category) query.category = category;
    if (location) query.location = new RegExp(location, 'i');
    
    const workers = await Worker.find(query);
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWorker = async (req, res) => {
  try {
    const worker = await Worker.create(req.body);
    res.status(201).json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
