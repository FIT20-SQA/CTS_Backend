import { parseToken } from '../utils/JwtVerifier.js';


const StaffAuthorization = async (req,res,next) => {
    const token = req.cookies.token
    const {id, role} = parseToken(token);

    if (role === "STAFF") {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: "Access denied"
        })
    }
}

export default StaffAuthorization;