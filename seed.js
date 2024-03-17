require("dotenv").config();
const mongoose = require('mongoose');
const Space = require('./models/space');
const winston = require('winston');

// Set up Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'seed.log' })
  ]
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    logger.info('Connected to MongoDB');
    seedData();
  })
  .catch((error) => {
    logger.error('Failed to connect to MongoDB:', error);
  });

// Seed initial data
async function seedData() {
  await Space.deleteMany(); // Clear existing data

  const spaces = [
    { name: 'Meeting Room', location: 'Floor 1', description: 'A small meeting room for up to 6 people' },
    { name: 'Lounge Area', location: 'Ground Floor', description: 'A comfortable space for informal meetings or relaxation' },
    { name: 'Boardroom', location: 'Floor 2', description: 'A large boardroom for formal meetings with conference facilities' },
    { name: 'Quiet Zone', location: 'Floor 3', description: 'A peaceful area for focused work or reading' },
    { name: 'Collaboration Space', location: 'Floor 4', description: 'An open area designed for group work and brainstorming sessions' },
    { name: 'Training Room', location: 'Floor 1', description: 'A dedicated space for training sessions and workshops' },
    { name: 'Cafeteria', location: 'Ground Floor', description: 'A dining area offering various food options for employees' },
    { name: 'Tech Hub', location: 'Floor 5', description: 'An innovation hub equipped with the latest technology for experimentation' },
    { name: 'Wellness Center', location: 'Floor 3', description: 'A facility promoting employee well-being with fitness and relaxation amenities' },
    { name: 'Outdoor Terrace', location: 'Rooftop', description: 'A scenic outdoor space for events and gatherings' }
  ];

  try {
    await Space.insertMany(spaces);
    logger.info('Data seeded successfully');
  } catch (error) {
    logger.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}
