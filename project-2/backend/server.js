const http = require('http');
const express = require('express');


const app = require('./app');
 


const server = http.createServer(app);
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
