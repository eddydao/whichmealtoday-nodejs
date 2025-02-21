import express from 'express';
import { getMenus, getMenuSuggestion } from '../controllers/MenuController';
// import { getMealSuggestion } from '../services/MealSuggestionService';

const router = express.Router();

router.get('/get-suggestion', getMenuSuggestion);
router.get('/', getMenus);

export default router;
