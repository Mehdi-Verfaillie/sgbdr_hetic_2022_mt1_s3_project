import { Connect, Query } from "@/config/database.module";
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
    const query = "SELECT DISTINCT category.name AS category, film.title, film.rating, rental_rate, COUNT(rental.rental_id) AS rental FROM category  JOIN film_category ON category.category_id = film_category.category_id  JOIN film ON film_category.film_id = film.film_id  JOIN inventory ON film.film_id = inventory.film_id JOIN rental ON inventory.inventory_id = rental.inventory_id JOIN payment ON rental.rental_id = payment.rental_id GROUP BY film.film_id";

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    return res.status(200).json({
                        results,
                    });
                })
                .catch((error) => {
                    return res.status(200).json({
                        message: error.message,
                        error,
                    });
                })
                .finally(() => {
                
                    connection.end();
                });
        })
        .catch((error) => {
            return res.status(200).json({
                message: error.message,
                error,
            });
        });
};
