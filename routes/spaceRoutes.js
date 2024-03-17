/**
 * @swagger
 * tags:
 *   name: Spaces
 *   description: APIs for managing spaces
 */

const express = require('express');
const router = express.Router();
const Space = require('../models/space');



/**
 * @swagger
 * components:
 *   schemas:
 *     Space:
 *       type: object
 *       required:
 *         - name
 *         - location
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the space
 *         location:
 *           type: string
 *           description: The location of the space
 *         description:
 *           type: string
 *           description: Description of the space
 *       example:
 *         name: Meeting Room
 *         location: Floor 1
 *         description: A small meeting room for up to 6 people
 */

/**
 * @swagger
 * /spaces:
 *   get:
 *     summary: Retrieve all spaces
 *     tags: [Spaces]
 *     responses:
 *       '200':
 *         description: A list of spaces
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Space'
 */
router.get('/', async (req, res) => {
  try {
    const spaces = await Space.find();
    res.send(spaces);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /spaces:
 *   post:
 *     summary: Create a new space
 *     tags: [Spaces]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Space'
 *     responses:
 *       '201':
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       '400':
 *         description: Bad request
 */
router.post('/', async (req, res) => {
  try {
    const space = new Space(req.body);
    await space.save();
    res.status(201).send(space);
  } catch (error) {
    res.status(400).send(error);
  }
});

/**
 * @swagger
 * /spaces/{id}:
 *   get:
 *     summary: Retrieve a space by ID
 *     tags: [Spaces]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the space
 *     responses:
 *       '200':
 *         description: A space object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       '404':
 *         description: Space not found
 *       '500':
 *         description: Internal Server Error
 */
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

/**
 * @swagger
 * /spaces/{id}:
 *   patch:
 *     summary: Update a space by ID
 *     tags: [Spaces]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the space
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Space'
 *     responses:
 *       '200':
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       '404':
 *         description: Space not found
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal Server Error
 */
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

/**
 * @swagger
 * /spaces/{id}:
 *   delete:
 *     summary: Delete a space by ID
 *     tags: [Spaces]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the space
 *     responses:
 *       '200':
 *         description: Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Space'
 *       '404':
 *         description: Space not found
 *       '500':
 *         description: Internal Server Error
 */
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
