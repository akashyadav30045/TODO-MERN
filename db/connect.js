const mongoose = require('mongoose');
require('dotenv').config();

<<<<<<< HEAD
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
=======
const URL="mongodb+srv://12345:12345@taskmanager.e2hzowx.mongodb.net/?retryWrites=true&w=majority";
>>>>>>> 1fed7520ddeb4f7822db3cabe31b3b5ebb724ac1

module.exports = connectDB;
