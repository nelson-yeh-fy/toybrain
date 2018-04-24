//require('dotenv').config()

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRouter from './routes/bookRouter';
import cfsInfoRouter from './routes/cfsInfoRouter';
import cfsLogRouter from './routes/cfsLogRouter';

const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect(process.env.DB_ADDRESS);

// setting body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/Books', bookRouter);
app.use('/api/cfsInfo', cfsInfoRouter);
app.use('/api/cfsLog', cfsLogRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})

