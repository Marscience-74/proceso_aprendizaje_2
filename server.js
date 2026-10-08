const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res) =>{
    console.log('funcionando')
})
app.listen(3001,() =>{
    console.log('http://localhost:3001')
})