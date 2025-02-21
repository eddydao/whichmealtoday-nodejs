import app from './App'; // Import Express app
import dotenv from 'dotenv';

// Load environment variables
//dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
