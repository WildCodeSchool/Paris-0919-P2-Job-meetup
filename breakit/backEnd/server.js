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

app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.listen( port, () => {
  console.log(`server running on port ${port}`)
})