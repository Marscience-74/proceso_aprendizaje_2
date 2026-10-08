require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const connectDB = require('./src/config/db')
const logger = require('./src/middlewares/logger')
const notFound = require('./src/middlewares/notFound')
const errorHandler = require('./src/middlewares/errorHandler')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/estado', (req, res) => {
    res.json({ estado: 'OK' })
})


app.use(notFound)
app.use(errorHandler)

async function iniciarServer() {
    try {
        //await connectDB()
        const PORT = process.env.PORT || 3001
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error('Error al conectar', error)
        process.exit(1)
    }
}

iniciarServer()