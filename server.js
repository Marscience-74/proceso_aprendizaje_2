const express = require('express')
const app = express()
const connectDB = require('./config/db')

const notFound = require('./src/middlewares/notFound');

app.use(express.json())

async function iniciarServer() {
    try {
        await connectDB()
        const PORT = process.env.PORT || 3001

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    } catch(error){
        console.error('Error al conectar', error)
        process.exit(1)
    }
}

iniciarServer()

app.get('/estado', (req, res) => {
    res.send({ estado: 'OK' })
})


app.use(notFound)