import express from 'express';
import { getMenus, getSuggestion } from '../controllers/MenuController';

const router = express.Router();

router.get('/get-suggestion', getSuggestion);
router.get('/', getMenus);

export default router;
