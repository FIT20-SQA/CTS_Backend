import jwtVerifier from '../utils/JwtVerifier.js';


const StaffAuthorization = (req,res,next) => {
    const token = req.cookies.token
    const { id, role } = jwtVerifier.parse(token);

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