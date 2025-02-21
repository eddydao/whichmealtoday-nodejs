import mongoose, { Schema, Document } from 'mongoose';

interface IRecipe extends Document {
    steps: string[];
    dish: mongoose.Types.ObjectId;
}

const RecipeSchema: Schema = new Schema({
    steps: [{ type: String, required: true }],
    dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish' },
});

export default mongoose.model < IRecipe > ('Recipe', RecipeSchema);
