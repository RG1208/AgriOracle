import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true 
        },

        aadharNumber: { 
            type: String, 
            unique: true, 
            required: true 
        },
        mobileNumber: { 
            type: String, 
            unique: true, 
            required: true 
        },
        farmerImg: { 
            type: String, //cloudinary url
            required: true
        },

        state: {
            type: String, 
            required: true 
        },

        district: {
            type: String, 
            required: true 
        },
        password:{
            type: String,
            required: true
        },
        refreshToken:{
            type: String
        }
    }, { timestamps: true });

UserSchema.pre("Save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            name: this.name,
            aadharNumber: this.aadharNumber
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', UserSchema);