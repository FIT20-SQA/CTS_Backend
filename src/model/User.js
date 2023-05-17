
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;

const User = new Schema({
    firstname: {
        type: String,
        required: true,
        unique: false,
        maxLength: 255,
        minLength: 2
    },

    lastname: {
        type: String,
        required: [true],
        unique: false,
        maxLength: 255,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter password"],
        maxLength: [255, "max 255 character long"],
        minLength: [5, "minium 5 character long"]

    },
    role: {
        type: String,
        require: true,
        default: "STAFF",
        enum: ['ADMIN', "STAFF"]
    },
    avatar: {
        type: String
    },


});


User.pre('save', async function (next) {
    const user = this
    try {
        const existedUser = await user.constructor.findOne({ email: user.email });
        if (existedUser) {
            throw new Error("Email already existed");
        }

        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        user.avatar = `https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}&background=${generateRandomHexColor()}`
        next();
    } catch (error) {
        next(error);
    }
});

User.statics.login = async function (email, password) {

    const user = await this.findOne({ email: email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        } else {
            throw Error('incorrect username or password');
        }
    }
    throw new Error("incorrect username or password");
}

function generateRandomHexColor() {
    const hexDigits = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
        // Get a random index between 0 and 15 to pick a hex digit
        const randomIndex = Math.floor(Math.random() * 16);
        // Append the randomly picked hex digit to the color string
        color += hexDigits[randomIndex];
    }

    return color;
}


export default mongoose.model('User', User);