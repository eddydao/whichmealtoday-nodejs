import { DishModel, Dish, DishCategory } from '../models/Dish';

// Function to calculate similarity between two dishes using Jaccard Similarity
const calculateSimilarity = (dishA: Dish, dishB: Dish): number => {
    const setA = new Set([...dishA.ingredients, dishA.cuisine]);
    const setB = new Set([...dishB.ingredients, dishB.cuisine]);

    const intersection = new Set([...setA].filter(x => setB.has(x)));
    const union = new Set([...setA, ...setB]);

    return intersection.size / union.size;
};

// Function to get recommended dishes within a specific category
export const getRecommendedDishesByCategory = async (
    dishId: string,
    category: DishCategory,
    count: number
): Promise<Dish[]> => {
    const allDishes = await DishModel.getAll();

    // Filter dishes by category
    const filteredDishes = allDishes.filter(dish => dish.category === category);

    // Find the reference dish
    const referenceDish = allDishes.find(d => d.id === dishId);
    if (!referenceDish) throw new Error('Dish not found');

    // Calculate similarity scores
    const scoredDishes = filteredDishes
        .filter(d => d.id !== dishId) // Exclude the reference dish itself
        .map(d => ({
            dish: d,
            score: calculateSimilarity(referenceDish, d),
        }))
        .sort((a, b) => b.score - a.score); // Sort by highest similarity

    return scoredDishes.map(d => d.dish).slice(0, count); // Return top 'count' recommendations
};
