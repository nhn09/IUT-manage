const mongoose = require ('mongoose')

const Role = mongoose.Schema(
    {
        name:{
            type:String
        }
    }
)


module.exports = mongoose.model('Role',Role)
