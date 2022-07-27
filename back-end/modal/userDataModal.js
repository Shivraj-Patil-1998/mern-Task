const mongoose = require('mongoose')

const userData = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userregister'
    },
    text:{
        type:String
    },
    image:{
        data:Buffer,
        contentType:String
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('userdata',userData)