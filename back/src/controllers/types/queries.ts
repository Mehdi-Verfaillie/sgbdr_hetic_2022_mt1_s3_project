export const totalMoviesQuery = "SELECT DISTINCT COUNT(film_id) as total FROM film";

export const getMovies = (limit: string, page: string, column: string, orderType: "ASC" | "DESC"): string => {
    return `SELECT DISTINCT film.film_id as id, category.name AS category, film.title, film.rating, rental_rate, COUNT(rental.rental_id) AS rental FROM category JOIN film_category ON category.category_id = film_category.category_id JOIN film ON film_category.film_id = film.film_id JOIN inventory ON film.film_id = inventory.film_id JOIN rental ON inventory.inventory_id = rental.inventory_id JOIN payment ON rental.rental_id = payment.rental_id GROUP BY film.film_id ORDER BY ${column === "film" ? `${column}.title` : column === "category" ? `${column}.name` : column} ${orderType} LIMIT ${limit} OFFSET ${page}`;
};
