const mongoose = require('mongoose')

const userRegister = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('userregister',userRegister)