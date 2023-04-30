import TheaterRoom from '../model/TheaterRoom.js';
import Movie from '../model/Movie.js';
import Food from '../model/Food.js';
import Drink from '../model/Drink.js';
import User from '../model/User.js';



class AdminController {
    async createTheaterRoom(req, res) {
        const { name, rowNum, seatsPerRow } = req.body;

        try {
            // create and save a new theater room
            const theaterRoom = await TheaterRoom.create({
                name,
                rowNum,
                seatsPerRow
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

    async updateTheaterRoom(req, res) {
        const body = req.body;
        const id = req.params.id;
        
        const theaterRoom = TheaterRoom.findById(id);

        if (!theaterRoom) {
            const body = {
                success: false,
                message: "Theater room not found"
            }
            res.status(404).json(body);
        }
        
        if (body.name) theaterRoom.name = body.name
        if (body.rowNum) theaterRoom.rows = body.rows
        if (body.setPerRows) theaterRoom.setPerRows = body.setPerRows
        if (body.image) theaterRoom.image = body.image

        try {
            await theaterRoom.save();

            const body = {
                success: true,
                message: "Update theater room successfully"
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
    async updateMovie(req, res) {
        const body = req.body;
        const id = req.params.id;

        const movie = Movie.findById(id);

        if (!movie) {
            const body = {
                success: false,
                message: "Movie not found"
            }
            res.status(404).json(body);
        }
        
        if (body.name) movie.name = body.name;
        if (body.description) movie.description = body.description;
        if (body.releaseDate) movie.releaseDate = body.releaseDate;
        if (body.duration) movie.duration = body.duration;
        if (body.genre) movie.genre = body.genre;
        if (body.director) movie.director = body.director;
        if (body.cast) movie.cast = body.cast;
        if (body.poster) movie.poster = body.poster;


        try {
            await movie.save();
        } catch (err) {
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

    async updateFood(req, res) {
        const body = req.body;
        const id = req.params.id;

        const food = Food.findById(id);

        if (!food) {
            const body = {
                success: false,
                message: "Food not found"
            }
            res.status(404).json(body);
        }

        if (body.name) food.name = body.name;
        if (body.price) food.price = body.price;
        if (body.description) food.description = body.description;
        if (body.category) food.category = body.category;
        if (body.inStock) food.inStock = body.inStock;
        if (body.image) food.image = body.image; 

        try {
            // update the food
            await food.save();
            const body = {
                success: true,
                message: "Update food successfully"
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

    async updateDrink(req, res) {
        const body = req.body;
        const id = req.params.id;

        const drink = Drink.findById(id);

        if (!Drink) {
            const body = {
                success: false,
                message: "Food not found"
            }
            res.status(404).json(body);
        }

        if (body.name) drink.name = body.name;
        if (body.price) drink.price = body.price;
        if (body.description) drink.description = body.description;
        if (body.category) drink.category = body.category;
        if (body.inStock) drink.inStock = body.inStock;
        if (body.image) drink.image = body.image; 

        try {
            // update the food
            await drink.save();
            const body = {
                success: true,
                message: "Update food successfully"
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