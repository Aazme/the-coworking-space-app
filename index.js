require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const spaceRoutes = require("./routes/spaceRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const port = 3000;


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    logger.info("Connected to MongoDB");

    app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    logger.error("Failed to connect to MongoDB:", error);
  });

app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Spaces API",
      version: "1.0.0",
      description: "APIs for managing spaces",
    },
  },
  apis: ["./routes/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use("/spaces", spaceRoutes);
