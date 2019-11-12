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


/* -------------- SignUp method ----------------- */

app.post('/api/user/signup', (req,res) => {
    const user = new User({
        mail : req.body.mail,
        firstName : req.body.firstName,
        name : req.body.name,
        password : req.body.password,
        type : req.body.type,
        spec : req.body.spec,
        languages : req.body.languages,
        interest : req.body.interest,
        text : req.body.text
    })
    user.save((err) => {
        if (err) res.status(400).send(err)
        res.status(200).send('SignUp successfull')
    })
})

/* -------------- SignIn method ----------------- */

app.post('/api/user/signin', (req,res) => {
    User.findOne({'mail':req.body.mail}, (err,user) => {
        if(!user) res.json({message: 'Login failed, user not found'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) res.status(400).send('User does not exist');
            if (!isMatch) return res.status(400).send('Wrong password');
            res.status(200).send('Logged in successfully')
            console.log('ok')
        })
    })
})

/* -------------- get User logged infos ----------------- */

app.post('/api/user/getUsers', (req, res) => {
    User.find({'mail' : req.body.mail}, function(err, result) {
        console.log('result = ', result)
        if (err) res.status(400).send('User does not exist');
        result.map(user => {
            onlineUser = {
                mail : user.mail,
                name : user.name,
                firstName : user.firstName,
                type : user.type,
                spec : user.spec,
                languages : user.languages,
                interest : user.interest,
                text : user.text,
            }
        }
            )
        console.log(onlineUser)
        res.status(200).send(onlineUser)
    })
})

const port = process.env.PORT || 4000;

app.listen( port, () => {
  console.log(`server running on port ${port}`)
})