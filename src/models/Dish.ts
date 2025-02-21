import mongoose, { Schema, Document } from 'mongoose';

interface IDish extends Document {
    name: string;
    ingredients: string[];
    recipes: mongoose.Types.ObjectId[];
}

const DishSchema: Schema = new Schema({
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
});

export default mongoose.model < IDish > ('Dish', DishSchema);
