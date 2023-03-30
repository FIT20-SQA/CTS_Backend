import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from '../model/User.js';

const createToken = (payload) => {
    return jwt.sign(payload, "secret_key", { expiresIn: 5000 });
};

const maxAge = 2 * 24 * 60 * 60;

class AuthController {
    async register(req, res, next) {
        let data = req.body;
        const user =  User.create(data);
        try {
            await user.save()
            const payload = {
                id: user._id,
                role: user.role,
            }
            const token = createToken(payload);
            // res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });
            const body = {
                success: true,
                message: "Registration successfully",
                token: token,
            }
            res.status(200).json(body);
        } catch (err) {
            const body = {
                success: false,
                message: err.message,
            }

            res.status(404).json(body);
            next();
        }      
    }

    async login(req, res) {
        // res.status(201).json(34354);
        const { username, password } = req.body;

        try {
            res.clearCookie("token");
            const user = await User.login(username, password);
            const token = createToken(user._id, user.role);
            res.cookie("token", token, { httpOnly: true, maxAge: maxAge * 1000 });

            const body = {
                success: true,
                message: "login success",
                role: user.role,
                token: token,
            }

            res.status(200).json(body);
        } catch (err) {

            const body = {
                success: false,
                message: err.message,
            }

            res.status(401).json(body);
        }
    }

    test(req, res, next) {
        const cookie = req.cookies;
        // const currentUser= req.locals.user.username;
        const token = res.locals.currentUser;
        console.log(token._id);
        res.status(201).json({
            user: token.username,
            status: true,
            token: cookie.token,
        });
    }

    logout(req, res) {
        res.clearCookie("token");
        res.clearCookie("loginJwt");

        const token = res.cookies;
        res.locals.currentUser = null;
    
        console.log(token);
        res.status(200).json({
            message: "Clear successful",
            token: token,
        });
    }

    test_admin(req, res) {
        const cookie = req.cookies;
        // const currentUser= req.locals.user.username;
        const token = res.locals.currentUser;
        console.log(token._id);
        res.status(201).json({
            user: token.username,
            status: true,
            token: cookie.token,
        });
    }
}

export default new AuthController();