const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const dbRoute =
  'mongodb+srv://Administrator:86eqbv9U77bDvVXN@cluster0-gjnxq.mongodb.net/test?retryWrites=true&w=majority';

const app = express();
app.use(cors());

mongoose.connect(dbRoute)
  .then(() => console.log("DB connected"))
  .catch( error => console.log(error));

const {User} = require('./model/User')

app.use(bodyParser.json());

app.post('/api/user/signup', (req,res) => {
    const user = new User({
        mail : req.body.mail,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password,
        type : req.body.type,
        skills : req.body.skills,
    })
    user.save((err, response) => {
        if (err) res.status(400).send(err)
        res.status(200).send(response)
    })
})

app.post('/api/user/signin', (req,res) => {
    User.findOne({'email':req.body.email}, (err,user) => {
        if(!user) res.json({message: 'Login failed, user not found'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) return res.status(400).json({
                message:'Wrong password'
            });
            res.status(200).send('Logged in successfully')
        })
    })
})

const port = process.env.PORT || 4000;

app.listen( port, () => {
  console.log(`server running on port ${port}`)
})