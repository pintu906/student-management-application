const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv")
const userRoutes = require('./routes/user');
const studentRoutes = require('./routes/students');

const app = express();

app.use(cors());              // ✅ VERY IMPORTANT
app.use(express.json());
dotenv.config()

app.use('/api/users', userRoutes);
app.use('/api/users/students', studentRoutes);


mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});



module.exports = app;
 