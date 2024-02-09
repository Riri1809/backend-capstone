import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },
    email: {
        type: String,
        required: [true, "Please provide a name"],
        unique:true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: [6, "Password must be more than 6 characters"],
        //maxLength: [12, "Password must be no more than 12 characters"]  
    },
    phone: {
        type: String,
        default: "(1)"
    },
    bio: {
        type: String,
        maxLength: [120, "No more than 120 characters"]
    }

}, {
    timestamps: true
});

//Encrypt password before saving to DB
// userSchema.pre("save", async function(next) {
//     if(!this.isModified("password")) {
//         return next();
//     }
//     //hash password
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//})

export default mongoose.model('User', userSchema);
