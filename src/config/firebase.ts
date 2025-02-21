import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Load Firebase Service Account JSON
const serviceAccount = require('../config/firebase-service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
