import jwtVerifier from '../utils/JwtVerifier.js'


const AdminAuthorization = (req,res,next) => {
    const token = req.cookies.token
    const { id, role } = jwtVerifier.parse(token);

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