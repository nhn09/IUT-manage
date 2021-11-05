const mongoose = require('mongoose')


const SemesterSchema = mongoose.Schema({
   

    number:
    {type:Number,
    required:true
    },
 

}, { collection : 'btm' })



module.exports = mongoose.model('SemesterSchema',SemesterSchema)