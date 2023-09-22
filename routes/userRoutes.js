const express = require('express');;
const User = require('../Models/userModel');
const router = express.Router();


router.get('/', async(req, res) =>{
    const docs = await User.find({});
    res.json(docs)
})


router.post('/', async(req, res)=>{
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    const result = await user.save();
    console.log('result', result);
    res.json(result)
})

module.exports = router;

