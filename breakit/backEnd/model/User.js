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
        name: 
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
        type :
        {
            type: String,
            required: true,
            minlength: 0,
            maxlength: 24
        },
        spec :
        {
            type: Array,
            required: true,
        },
        languages :
        {
            type: Array,
            required: true,
        },
        interest : 
        {
            type: Array,
            required: true,
        },
        text : 
        {
            type : String,
            required : true,
            minlength : 0,
            maxlength : 2048
        },
        geoLoc : {
            type : Array,
            required : false
        },
        online : {
          type : Boolean,
          required : false
      },
      field : {
        type : String,
        required : false
    },
    web : {
      type : String,
      required : false
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