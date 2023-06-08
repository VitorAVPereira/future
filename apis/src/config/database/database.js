const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const pwdAtlas = process.env.PASSWORD_ATLAS
const URI = `mongodb+srv://vitorpereira:${pwdAtlas}@wallet.pxoaf83.mongodb.net/?retryWrites=true&w=majority`

const dbConnection = async() => {
  if(!global.mongoose){
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI)
  }
}

module.exports = dbConnection