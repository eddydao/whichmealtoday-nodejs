import express, { Application } from 'express';
//import cors from 'cors';
//import connectDB from './config/db';
import menuRoutes from './routes/Menu';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();

// Connect to MongoDB
//connectDB();

// Middleware
//app.use(cors());
app.use(express.json());

// Routes
app.use('/api/menus', menuRoutes);

export default app;
