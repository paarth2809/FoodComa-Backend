const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name is required"],
        minlength: [5, "First name must be 5 character long"],
        lowercase: true,
        trim: true,  // if user gives extra spaces, it will automatically remove it
        maxlength: [20, "Firs name should be less than or equal to 20 characters"]
    },

    lastName:{
        type: String,
        required: [true, "First name is required"],
        minlength: [5, "First name must be 5 character long"],
        lowercase: true,
        trim: true,  // if user gives extra spaces, it will automatically remove it
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    mobileNumber:{
        type: String,
        trim: true,
        unique: [true, "Phone number is already in use"],
        required: [true, "Phone number should be provided"],
        maxlength: [10,"phone should be of length 10"],
        minlength: [10,"phone should be of length 10"]
    },

    email:{
        type: String,
        trim: true,
        required: [true, "email should be provided"],
        unique: [true, "email is already in use"],
        // below is regex expression to validate email format
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password:{
        type: String,
        required: [true, "password should be provoded"],
        minlength: [6, "password should be minimum 6 character long"]
    }
},{
    timestamps: true,
    versionKey: false
});


const User=mongoose.model("User",userSchema)
module.exports =User