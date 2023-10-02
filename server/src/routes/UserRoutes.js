const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signin",(req,res) => {

});

router.post("/signup",async (req,res) => {

    const user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({
            message:"user already exists!"
        });
    }
    
      
        if(!user){
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;

        const _user = new User({
            firstname,
            lastname,
            email,
            password,
            username : Math.random().toString()
        });

        _user.save(
                res.status(201).json({
                    user:_user
                })
        );
    }
   
});

    



module.exports = router;

