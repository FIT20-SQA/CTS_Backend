import Movie from '../model/Movie.js';
import Food from '../model/Food.js';
import Drinks from '../model/Drink.js';


class AuthenticatedUserController {
    // get the movies
    async getMovies(req, res) {
        try {
            const movies = await Movie.findAll();

            const body = {
                success: true,
                message: "Get movies successfully",
                data: movies
            }

            res.status(200).json(body);
        }
        catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }

    }

    // get the foods
    async getFoods(req, res) {
        try {
            const foods = await Food.findAll();

            const body = {
                success: true,
                message: "Get foods successfully",
                data: foods
            }

            res.status(200).json(body);
        }
        catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }

    }

    // get the drinks
    async getDrinks(req, res) {
        try {

            const drinks = Drink.findAll()

            const body = {
                success: true,
                message: "Get drinks successfully",
                body: drinks
            }

            res.status(200).json(body)
        } catch (err) {
            const body = {
                success: false,
                message: err.message
            }

            res.status(400).json(body)
        }
    }
}


export default new AuthenticatedUserController();