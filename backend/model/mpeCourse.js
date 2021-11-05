const mongoose = require('mongoose')


const chaptersSchema = mongoose.Schema({
    name :
    {
        type:String
    },
    isCompletedByTeacher:
    {
        type:Boolean
    },
    date:{
        type:Date
    }})




const CourseSchema = mongoose.Schema({
   
    title:
    {type:String,
    required:true
    },
    mail:
    {
        type:String,
    },
    coursecode:
    {type:Number,
    required:true
    },
    description:
    {type:String,
    required:true
    },
    courseTeacher:
    {type:String,
    required:true
    },
    courseCreationDate:
    {
        type:Date,
        default:Date.now
    
    },
    rating:
    {
        type:Number,
    },
    totalEnrolled:
    {
        type:Number
    },
 semester:{
     type:Number
 },
    chapters:[chaptersSchema]

},{collection : 'mpeCourses'})

module.exports = mongoose.model('mpeCourses',CourseSchema)