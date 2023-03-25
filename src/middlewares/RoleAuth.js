const User = require('../model/User');


const RoleAuth = (req,res,next) => {
    const user = res.locals.currentUser;
    const role = user.role;

    if (role) {
        next();
    }

    else {
        res.status(401).json({
            success: false, 
            message: "Invalid token"
        })
    }

    
}

const AdminAuth = (req,res,next) => {
    const user = res.locals.currentUser;
    const role = user.role;

    if (role !== "Admin") {
        res.status(401).json({
            success: false, 
            message: "No authentication"
        })
    } else {
        next();
    }
}

module.exports = {RoleAuth, AdminAuth};