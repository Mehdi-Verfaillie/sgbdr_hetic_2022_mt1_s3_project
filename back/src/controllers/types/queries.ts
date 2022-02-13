export const totalMoviesQuery = "SELECT COUNT(DISTINCT film_id) as total FROM film";

export const getMovies = (limit: string, page: string, column: string, orderType: "ASC" | "DESC"): string => {
    return `
     SELECT
       film.film_id as id, category.name AS category, film.title, film.rating, rental_rate, COUNT(rental.rental_id) AS rental FROM category
     Left JOIN
       film_category ON category.category_id = film_category.category_id
     Left JOIN
       film ON film_category.film_id = film.film_id
     Left JOIN
       inventory ON film.film_id = inventory.film_id
     Left JOIN
       rental ON inventory.inventory_id = rental.inventory_id
     Left JOIN
       payment ON rental.rental_id = payment.rental_id
     GROUP BY film.film_id
     ORDER BY
       ${column === "film" ? `${column}.title` : column === "category" ? `${column}.name` : column} ${orderType}
     LIMIT
       ${limit}
     OFFSET
     ${parseInt(page) * parseInt(limit)}`;
};
