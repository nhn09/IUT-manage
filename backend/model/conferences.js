const mongoose = require('mongoose')


const ConferenceSchema = mongoose.Schema({
   
    title:
    {type:String,
    required:true
    },
    description:
    {type:String,
    required:true
    },
   date:
    {
        type:Date,
        default:Date.now
    
    },
    location:
    {
        type:String,
    },
 cost:{
     type:Number
 }
   
    

},{collection : 'conferences'})

module.exports = mongoose.model('Conferences',ConferenceSchema)