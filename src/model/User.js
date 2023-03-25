const mongoose =  require('mongoose');
let validate = require('mongoose-validator');
const {isEmail } = require('validator');
const bcrypt = require('bcrypt');
const mongooseDelete = require("mongoose-delete");
const ROLE = require('../config/Role');


// let namevalidate = [
//     validate({
//         validator: 'isLength',
//         arguments: [3, 50],
//         message: 'Name should be between 5 and 255 characters'
//     })
// ]




const Schema = mongoose.Schema;

const User = new Schema({
    firstname : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },

    lastname : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2 
    },

    username: {
        type: String, 
        require: [true,"Enter username"],
        maxLength: 255,
        unique : true,
        minLength: [5,'min 5 character']
    },

    password: {
        type: String, 
        require: [true,"Enter password"],
        maxLength: [255, "max 255 character long"],
        minLength: [5, "minium 5 character long"]
        
    },
    role : { 
        // type: ROLE,
        type: String,
        require: true,
        // ref: ROLE,
        default: "Staff",
        enum: ['Admin', "Staff"]
    }
    
},
{timestamps : true});


User.pre('save', async function(next) { 
    // console.log('A : ' + this);
    const salt = await  bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
User.statics.login = async function(username,password) { 
    const user = await this.findOne({username : username});
    if (user) { 
       const auth = await bcrypt.compare(password, user.password);
        if (auth) { 
            return user;
        } else {
            throw  Error('incorrect username or password');
        }
    }
    throw new Error("incorrect username or password");
}




module.exports = mongoose.model("User",User);