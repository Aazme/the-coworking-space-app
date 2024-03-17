require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const spaceRoutes = require("./routes/spaceRoutes");


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

// Routes
app.use("/spaces", spaceRoutes);
