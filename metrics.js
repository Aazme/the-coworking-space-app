const promClient = require('prom-client');

// Define custom metrics
const requestsCounter = new promClient.Counter({
  name: 'api_requests_total',
  help: 'Total number of API requests',
  labelNames: ['endpoint', 'method']
});

const createdSpacesCounter = new promClient.Counter({
  name: 'spaces_created_total',
  help: 'Total number of spaces created'
});

const updatedSpacesCounter = new promClient.Counter({
  name: 'spaces_updated_total',
  help: 'Total number of spaces updated'
});

const deletedSpacesCounter = new promClient.Counter({
  name: 'spaces_deleted_total',
  help: 'Total number of spaces deleted'
});

module.exports = {
  requestsCounter,
  createdSpacesCounter,
  updatedSpacesCounter,
  deletedSpacesCounter
};
