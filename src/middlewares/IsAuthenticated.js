import jwtVerifier from '../utils/JwtVerifier.js';

const IsAuthenticated = (req,res,next) => {
    const token = req.cookies.token;
    const { id, role } = jwtVerifier.parse(token);

    if (token && id && role) {
        next();
    } else {
        res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
}

export default IsAuthenticated;