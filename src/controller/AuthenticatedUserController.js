import Movie from '../model/Movie.js';
import Food from '../model/Food.js';
import Drink from '../model/Drink.js';
import ShowtimeSpot from '../enum/ShowtimeSpot.js';
import { parseToken } from '../utils/JwtVerifier.js';
import User from '../model/User.js';

class AuthenticatedUserController {
    // get the movies
    async getMovies(req, res) {
        try {
            const movies = await Movie.find()

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
            const foods = await Food.find();

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

            const drinks = await Drink.find()

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

    // get all showtimes on a specific date
    async getShowtimes(req, res) {
        const { date } = req.body 
        try {
            const allShowtimesAtDate = await MovieShowtime.find({ showtimeDate: date }).select('-tickets')
            
            const showtimeBySpot = {}

            // group the showtimes by showtimeSpot
            for (let i = 0; i < showtimeBySpot.length; i++) {
                const spot = showtimes[i]
                const showtimes = allShowtimesAtDate.filter(showtime => showtime.showtimeSpot === spot)
                showtimeBySpot[spot] = showtimes
            }

            const body = {
                success: true,
                message: "Get showtimes successfully",
                data: showtimeBySpot
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


    async getUserInfo(req, res) {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Bearer token missing or invalid',
            });
        }

        const token = authorizationHeader.split(' ')[1];
        const { id, role } = parseToken(token)
        const user = await User.findById(id)

        const body = {
            success: true,
            message: "Get user info successfully",
            data: {
                id: user._id,
                firstName: user.firstname,
                lastName: user.lastname,
                email: user.email,
                role: user.role,
                avatar: user.avatar
            }

        }
        res.status(200).json(body)
    }
    
}


export default new AuthenticatedUserController();