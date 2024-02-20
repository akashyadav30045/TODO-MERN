const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const URL="mongodb+srv://12345:12345@taskmanager.e2hzowx.mongodb.net/?retryWrites=true&w=majority";


const url = URL;
const connectDB = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
