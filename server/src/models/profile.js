const mongoose = require('mongoose');
const profileSchema =new mongoose.Schema({

        name: {type:String},
        type: {type:String},
        phone:{type:String},
        number: {type:String},
        email:{type:String},
        amount: {type:String},
        address: {type:String},
        color: {type:String},

},{collection:"profile"});
module.exports=mongoose.model("profile",profileSchema);
