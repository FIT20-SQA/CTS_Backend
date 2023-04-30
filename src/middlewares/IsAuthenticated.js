import { parseToken } from '../utils/JwtVerifier.js'

const IsAuthenticated = async (req,res,next) => {
    const token = req.cookies.token;
    const {id, role} = parseToken(token);

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