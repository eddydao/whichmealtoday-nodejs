import { getRecommendedDishesByCategory } from './ContentBasedRecommendationService';
import { DishModel, Dish } from '../models/Dish';

const DISH_COUNT = {
    appetizer: 1,
    main: 2,
    dessert: 1
};

// Function to fetch a reference dish from each category
const getRandomReferenceDish = async (category: string): Promise<Dish | null> => {
    const allDishes = await DishModel.getAll();
    const categoryDishes = allDishes.filter(dish => dish.category === category);

    if (categoryDishes.length === 0) return null;

    // Select a random reference dish for similarity comparison
    return categoryDishes[Math.floor(Math.random() * categoryDishes.length)];
};

// Function to generate a meal suggestion using content-based recommendations
export const getMealSuggestion = async () => {
    const appetizerRef = await getRandomReferenceDish('appetizer');
    const mainDishRef = await getRandomReferenceDish('main');
    const dessertRef = await getRandomReferenceDish('dessert');

    const appetizer = appetizerRef ? await getRecommendedDishesByCategory(appetizerRef.id!, 'appetizer', DISH_COUNT.appetizer) : [];
    const mainDishes = mainDishRef ? await getRecommendedDishesByCategory(mainDishRef.id!, 'main', DISH_COUNT.main) : [];
    const dessert = dessertRef ? await getRecommendedDishesByCategory(dessertRef.id!, 'dessert', DISH_COUNT.dessert) : [];

    return { appetizer, main: mainDishes, dessert };
};
