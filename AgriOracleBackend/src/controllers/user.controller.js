import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

const registerUser = asyncHandler( async (req,res) => { 
    // take user details from frontend
    // check for non-empty fields
    // check if user already exists - by aadharNumber,mobileNumber
    // check for farmerImg
    // upload them to cloudinary, farmerImg check
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    // taking input from frontend
    const {name,aadharNumber,mobileNumber,state,district,password} = req.body
    
    // checking for non-empty fields
    if(name===""){
        throw new ApiError(400,"name is required")
    }
    if(aadharNumber===""){
        throw new ApiError(400,"aadharNumber is required")
    }
    if(mobileNumber===""){
        throw new ApiError(400,"mobileNumber  is required")
    }
    if(state===""){
        throw new ApiError(400,"state  is required")
    }
    if(district===""){
        throw new ApiError(400,"district is required")
    }
    if(password===""){
        throw new ApiError(400,"password is required")
    }

    // checking if user already exists
    const existedUser = await User.findOne({
        $or: [{mobileNumber},{aadharNumber}]
    })

    if(existedUser){
        throw new ApiError(409, "User already exists with this Mobile Number or Aadhar Number")
    }

    // check for farmerImg
    const farmerImgLocalPath = req.files?.farmerImg[0]?.path

    if(!farmerImgLocalPath){
        throw new ApiError(400,"Farmer Image is required")
    }

    // uploading farmerImg to cloudinary
    const farmerImg = await uploadOnCloudinary(farmerImgLocalPath)

    if(!farmerImg){
        throw new ApiError(400,"Farmer Image is required")
    }

    // create user object - create entry in db
    const user = await User.create({
        name: name.toLowerCase(),
        mobileNumber,
        aadharNumber,
        password,
        state,
        district,
        farmerImg:farmerImg.url
    })

    // remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // check for user creation
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while creating the user")
    }

    // return response
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User Registered Successfully")
    )
 })

export {registerUser} 