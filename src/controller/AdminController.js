import TheaterRoom from '../model/TheaterRoom.js';
import Movie from '../model/Movie.js';
import Food from '../model/Food.js';
import Drink from '../model/Drink.js';
import User from '../model/User.js';



class AdminController {
    async createTheaterRoom(req, res) {
        const { name, rows, setPerRows } = req.body;

        try {
            // create and save a new theater room
            const theaterRoom = await TheaterRoom.create({
                name,
                rows,
                setPerRows
            });

            const body = {
                success: true,
                message: "Create theater room successfully"
            }

            res.status(200).json(body);
        } catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }
    }

    async createMovie(req, res) {
        const { name,
            description,
            releaseDate,
            duration,
            genre,
            director,
            cast,
            poster,
        } = req.body;

        try {
            // create and save a new movie
            const movie = await Movie.create({
                name,
                description,
                releaseDate,
                duration,
                genre,
                director,
                cast,
                poster,
            });

            const body = {
                success: true,
                message: "Create movie successfully"
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

    async createFood(req, res) {
        const {
            name,
            price,
            description,
            category,
            inStock,
            image,
        } = req.body;

        try {
            // create and save a new food
            const food = await Food.create({
                name,
                price,
                description,
                category,
                inStock,
                image,

            });

            const body = {
                success: true,
                message: "Create food successfully"
            }

            res.status(200).json(body);
        } catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }
    }

    async createDrink(req, res) {
        const {
            name,
            price,
            description,
            category,
            inStock,
            image,
        } = req.body;

        try {
            // create and save a new drink
            const drink = await Drink.create({
                name,
                price,
                description,
                category,
                inStock,
                image,

            });

            const body = {
                success: true,
                message: "Create food successfully"
            }

            res.status(200).json(body);
        } catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }
    }

    async createStaff(req, res) {
        const {
            firstname,
            lastname,
            email,
            password,
        } = req.body;

        try {
            // create and save a new staff
            const staff = await User.create({
                firstname,
                lastname,
                email,
                password,
            });

            const body = {
                success: true,
                message: "Create staff successfully"
            }

            res.status(200).json(body);
        } catch (err) {
            const body = {
                success: false,
                message: err.message
            }
            res.status(400).json(body);
        }
    }
}

export default new AdminController();