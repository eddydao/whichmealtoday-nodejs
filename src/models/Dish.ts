import db from '../config/firebase';

export type DishCategory = 'appetizer' | 'main' | 'dessert';

export interface Dish {
    id?: string;
    name: string;
    ingredients: string[];
    cuisine: string;
    category: DishCategory;
}

// Firestore Collection Reference
const collectionRef = db.collection('dishes');

export const DishModel = {
    async create(dish: Dish): Promise<string> {
        const docRef = await collectionRef.add(dish);
        return docRef.id;
    },

    async getAll(): Promise<Dish[]> {
        const snapshot = await collectionRef.get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Dish));
    },

    async getById(id: string): Promise<Dish | null> {
        const doc = await collectionRef.doc(id).get();
        return doc.exists ? ({ id: doc.id, ...doc.data() } as Dish) : null;
    },

    async update(id: string, data: Partial<Dish>): Promise<void> {
        await collectionRef.doc(id).update(data);
    },

    async delete(id: string): Promise<void> {
        await collectionRef.doc(id).delete();
    }
};
