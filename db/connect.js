const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const URL=process.env.MONGO_URI;


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
