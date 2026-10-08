const mongoose = require('mongoose')

async function connectDB() {
    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI not defined')
    }
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected')
}
module.exports = connectDB