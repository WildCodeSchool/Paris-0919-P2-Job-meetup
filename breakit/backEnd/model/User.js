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

let SALT = 10;

userSchema.pre('save', function(next){
  const user = this;
  if(user.isModified('password')) {
    bcrypt.genSalt(SALT, function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();
      })
    })
  } else {
    next()
  }
})

userSchema.methods.comparePassword = function(candidatePassword, checkPassword){

    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
      if(err) return checkPassword(err)
      checkPassword(null, isMatch)
    })
  }


const User = mongoose.model('User', userSchema)

module.exports = {User};