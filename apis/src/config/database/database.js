const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL
const URI = MONGODB_URL

const dbConnection = async() => {
  if(!global.mongoose){
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
  }
}

module.exports = dbConnection