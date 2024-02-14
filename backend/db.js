const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.MONGO_URL

const connectToMongo = async()=>{
    try {
        await mongoose.connect(url)
        console.log("Mongodb is connected ")
        
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = connectToMongo;