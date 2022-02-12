import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.render("index", { title: "Express" });
};

/**
 * GET /
 * Movie list.
 */
export const movies = async (req: Request, res: Response): Promise<void> => {
    res.json({ path: "movies" });
};
