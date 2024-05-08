const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

const connectToDatabase = async () => {
    try {
        const con = await mongoose.connect(MONGODB_URL);
        console.log(`Connected to MongoDB: ${con.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connectToDatabase;
