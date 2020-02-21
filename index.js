const express = require('express')
const server = express()
const routes = require('./src/routes/routes')

// Use express.json() for json file response
server.use(express.json())

// Routes
server.use(routes)



// Port where server are running
const PORT = 3333
server.listen(PORT, ()=>{
    console.log(`running at port ${PORT}`)
})