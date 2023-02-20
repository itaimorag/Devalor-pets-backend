const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const http = require('http').createServer(app)

// Express App Config
app.use(cookieParser())
app.use(express.json())

// CORS
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://localhost:5173', 'http://localhost:4200', 'http://localhost:59155'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

// routes
const petsRoutes = require('./api/pets/pets.routes')
app.use('/api/pets', petsRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030

http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})