const express = require('express')
const router = express.Router()
const Users=require('../models/users')


  router.post("/login", async (req, res) => {
    // const user = await Users.findOne({email: req.body.email}).lean()
    const user = await Users.findOne({email: req.body.email}).lean()
    if(user){
      try{
      const {email,password} = user;
      const isMatched= bcrypt.compareSync(req.body.password, password)
      if(email && isMatched){
        const {password, ...refactoredUserObj} = user
        res.status(200).json({
          msg:"logged in successfully",
          userList: refactoredUserObj//if we needed all data of user we just send user and not need to lean()but when we want to refactor user and take user without any one or mor field like password we need to remove internal cache by using lean()for porpor display
        })
      }
      else{
        res.status(401).json({
          errorMsg:"unauthorized user"
        })
      }
      }
      catch(err){
        console.log(err)
      }
      }
      else{
        res.status(401).json({
          errorMsg:"user doesn't exist"
        })
      }
  
  });


  router.get("/register", async (req, res) => {
    try {
      const data = await Users.find()
  
      if (data) {
        res.status(200).json({
          userDetails: data
        })
      } else {
        res.status(500).json({ msg: 'Something is wrong' });
      }
  
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports = router;
  