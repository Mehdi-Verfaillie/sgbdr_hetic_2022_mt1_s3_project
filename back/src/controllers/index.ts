import { Connect, Query } from "../config/database.module";
import { Request, Response } from "express";
import { getMovies, totalMoviesQuery } from "./types/queries";

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
    const { page, limit }: { page: number, limit: number } = req.query;
    
    try {
        const connection = await Connect();

        const movies = await Query(connection, getMovies(limit, page));
        const total = await Query(connection, totalMoviesQuery);

        res.status(200).json({
            results: movies,
            total: total[0].total / limit,
        });

        connection.end();

    } catch (error) {
        res.status(200).json({
            message: error.message,
            error,
        });
    }
};
