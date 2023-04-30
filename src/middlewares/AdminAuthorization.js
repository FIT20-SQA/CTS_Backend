import { parseToken } from '../utils/JwtVerifier.js'


const AdminAuthorization = async (req,res,next) => {
    const token = req.cookies.token
    const {id, role} = parseToken(token);
    if (role === "ADMIN") {
        next();
    } else {
        res.status(403).json({
            success: false,
            message: "Access denied"
        })
    }
}

export default AdminAuthorization;