import admin from 'firebase-admin';
import * as fs from 'fs';

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/firebase-service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Read JSON file
const rawData = fs.readFileSync('sample.json', 'utf8');
const dishes = JSON.parse(rawData).dishes;

// Import function
const importData = async () => {
    try {
        for (const id in dishes) {
            await db.collection('dishes').doc(id).set(dishes[id]);
            console.log(`Imported: ${dishes[id].name}`);
        }
        console.log('All dishes imported successfully!');
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

importData();
