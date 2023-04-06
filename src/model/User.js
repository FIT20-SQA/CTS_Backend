
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


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
        default: "STAFF",
        enum: ['ADMIN', "STAFF"]
    }
    
});


User.pre('save', async function(next) { 
    const user = this
    try {
        const existedUser = await user.constructor.findOne({ email: user.email });
        if (existedUser) {
            throw new Error("Email already existed");
        }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

User.statics.login = async function(email,password) { 
    
    const user = await this.findOne({email : email});
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


export default mongoose.model('User', User);