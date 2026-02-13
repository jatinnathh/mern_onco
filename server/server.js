const { ExpressValidator, cookie } = require("express-validator");
const express = require('express')
const mongose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const { default: mongoose } = require("mongoose");


mongoose.connect('mongodb+srv://jatinnath1111:jatin11@cluster0.0osxjlq.mongodb.net/')
    .then(() => console.log('connected')).catch((err) => console.log(err))
const app = express()

const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type',
            'Authorization',
            'Cache-Control',
            'Expire', 'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))