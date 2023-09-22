const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()


const app = express();

app.use(cors());
app.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('db connected')
}

const userRoutes = require('./routes/userRoutes')
app.use('/userForm', userRoutes)


app.get('/api', (req, res)=>{
    res.json({"user":["userOne", "UserTwo", "userThree","userFour"]})
})

app.listen(8000)