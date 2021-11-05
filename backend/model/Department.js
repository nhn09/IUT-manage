const mongoose = require('mongoose')

const DepartmentSchema = mongoose.Schema({
   
    title:
    {type:String,
    required:true
    },
    type:
    {type:String,
    required:true
    },
    description:
    {type:String,
    required:true
    },
    HeadOfdept:
    {type:String,
    },

},{collection:'departments'})

module.exports = mongoose.model('Departments',DepartmentSchema)