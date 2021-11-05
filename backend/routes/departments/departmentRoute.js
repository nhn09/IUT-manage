const express = require('express')
const Department = require('../../model/Department')
const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const department = await Department.find();
        res.json({department})
    } catch (error) {
        res,json({message:error})
    }
})

router.post('/',(req,res)=>{

    const department = new Department({
        title:req.body.title,
        type:req.body.type,
        HeadOfdept:req.body.HeadOfdept,
        description:req.body.description

    })
    department.save()
    .then(data=>res.json(data))
    .catch(err=>console.log(err))

})

module.exports = router

