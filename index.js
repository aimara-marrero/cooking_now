const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
 require('dotenv').config()


const app = express();
const router = require('./api/routers/router');

const mongooseStart = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL || 'mongodb://localhost:27017/',
            {
                dbName: process.env.MONGO_DB || 'cookingnow',
            }
        );
        console.log('Connected to DB');
    } catch (err) {
        console.log(`Error connecting to DB: ${err}`);
    }
};

// Start DB Connection 
mongooseStart()

try {
    // Start Express Server
    app
        .use(morgan('dev'))
        .use(cors())
        .use(express.json())
        .use('/api', router)
        .listen(8080, (err) => {
            console.info('\n\n '+ '>'.repeat(40));
            console.info('💻  Cooking now');
            console.info('📡  PORT: http://localhost:8080');
            console.info('>'.repeat(40) + '\n\n');
        });
} catch (err) {
    console.log(`Error launching Server: ${err}`);
}