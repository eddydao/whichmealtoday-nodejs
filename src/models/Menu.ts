import mongoose, { Schema, Document } from 'mongoose';

interface IMenu extends Document {
    date: Date;
    dishes: mongoose.Types.ObjectId[];
}

const MenuSchema: Schema = new Schema({
    date: { type: Date, required: true },
    dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
});

export default mongoose.model<IMenu>('Menu', MenuSchema);
// https://daokythanh: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git@github.com/eddydao/whichmealtoday-nodejs.git
