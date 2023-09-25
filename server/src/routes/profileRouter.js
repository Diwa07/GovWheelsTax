const express = require('express')
const router = express.Router()

const Profile=require('../models/profile')



router.post('/tax', async (req, res,) => {
  console.log(req.body)
  const profile =new Profile(
    {
      name: req.body.name,
      type: req.body.name,
      phone: req.body.name,
      number: req.body.name,
      email: req.body.name,
      amount: req.body.name,
      address: req.body.name,
      color: req.body.name,

      
     
      

    }
   )
   const data= await profile.save()
    try {
      if (data) {
        res.json({
          msg: "your details is posted",
        });
      } else {
        res.status(500).json({
          error: "something went wrong",
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
 

  router.get("/tax", async (req, res) => {
    try {
        const data = await Profile.find()
        if(data){
            res.status(200).json({
                validDetails: data
            })
        }else{
            res.status(500).json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
    });
  module.exports = router;