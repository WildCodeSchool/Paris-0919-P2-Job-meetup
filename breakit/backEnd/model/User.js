const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema =  mongoose.Schema(
    {
        firstName: 
        {
            type: String,
            required: true,
            maxlength: 50
        },
        lastName: 
        {
            type: String,
            required: true,
            maxlength: 50
        },
        mail: 
        {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true
        },
        password: 
        {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024
        },
        type: 
        {
            type :String,
            required : true,
        },
        skills: 
        {
            type : String,
            required : true,
            maxlength: 1024,
        }
        
    },
    { timestamps: true }
);


const User = mongoose.model('User', userSchema)

module.exports = {User};