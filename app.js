const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

// Middleware for handling 404 errors
app.use(notFound);

// Middleware for error handling
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
