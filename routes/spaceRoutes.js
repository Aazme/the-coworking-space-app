
const express = require('express');
const router = express.Router();
const Space = require('../models/space');

router.get('/', async (req, res) => {
  try {
    const spaces = await Space.find();
    res.send(spaces);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const space = new Space(req.body);
    await space.save();
    res.status(201).send(space);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const space = await Space.findById(req.params.id);
    if (!space) {
      return res.status(404).send();
    }
    res.send(space);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const space = await Space.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!space) {
      return res.status(404).send();
    }
    res.send(space);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const space = await Space.findByIdAndDelete(req.params.id);
    if (!space) {
      return res.status(404).send();
    }
    res.send(space);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
