import { Request, Response } from 'express';

export const getMenus = async (req: Request, res: Response): Promise<void> => {
    try {
        const menu = "test get menu";
        res.status(200).json({ menu });
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
    }
};

export const getSuggestion = async (req: Request, res: Response): Promise<void> => {
    try {
        // Example: Fetching suggestion data (Mock response)
        const suggestions = [
            "Try a new dish today!",
            "How about a healthy salad?",
            "Don't forget to drink enough water.",
        ];

        // Send a random suggestion
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        res.status(200).json({ suggestion: randomSuggestion });

    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
    }
};
