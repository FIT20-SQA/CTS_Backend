const User = require("../model/User");

const cookie = require('cookie-parser');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({id}, 'secret_key', {
        expiresIn : 5000
    })
}

const maxAge = 2 * 24 * 60 * 60;

class UserController{
    
    async register(req,res,next) { 
       let data = req.body;
       const user = await new User(data);
       await user.save().then( () => {
            const token = createToken(user._id);
            res.cookie('token', token, {httpOnly: true, maxAge : maxAge * 1000})
            res.status(201).json({
                success: true,
                message: "Create successfully",
                user : user,
                token: token
            });
        }).catch( err => {
            console.log(err);
            res.status(401).json({
                success: false,
                message: err
            })
            next();
        })
    } 

    async login(req,res) { 
        // res.status(201).json(34354);
        const {username,password} = req.body;
        try {
            res.clearCookie('token');
            const user = await User.login(username,password);
            const token = createToken(user._id);
            res.cookie('token', token, {httpOnly: true, maxAge: maxAge * 1000});
            res.status(200).json({
                success : true,
                message: "login success",
                username: user.username,
                token: token
            })
        } catch(err) {
            console.log(err);
            res.status(401).json({ 
                message: err.message,
                status: false
            });
        }
    }

    test(req,res,next){
        const cookie = req.cookies;
        // const currentUser= req.locals.user.username;
        const token = res.locals.currentUser;
        console.log(token._id);
        res.status(201).json({
            user: token.username,
            status: true, 
            token: cookie.token

        });
    }

    logout(req,res) {
        res.clearCookie('token');
        res.clearCookie('loginJwt');

        const token = res.cookies;
        res.locals.currentUser = null;
        console.log(token);
        res.status(200).json({
            message : "Clear successful",
            token : token
        });

    }

    test_admin(req,res) {
        const cookie = req.cookies;
        // const currentUser= req.locals.user.username;
        const token = res.locals.currentUser;
        console.log(token._id);
        res.status(201).json({
            user: token.username,
            status: true, 
            token: cookie.token

        });
    }
}


module.exports = new UserController;