// apatoto lagtese na
const express = require('express')
const router = express.Router();


router.get('/:departmentWise',async (req,res)=>{
    try {
        const parameter = req.params.departmentWise
        const semesters = await parameter.find();
        console.log(`req.params ${parameter}`)
        res.json(req.params)
    } catch (error) {
        res.json(error)
    }
})

//

// router.get('/', async (req,res)=>{
//     try {
//         const department = await Department.find();
//         res.json({department})
//     } catch (error) {
//         res,json({message:error})
//     }
// })

// router.post('/',(req,res)=>{

//     const department = new Department({
//         title:req.body.title,
//         type:req.body.type,
//         HeadOfdept:req.body.HeadOfdept,
//         description:req.body.description

//     })
//     department.save()
//     .then(data=>res.json(data))
//     .catch(err=>console.log(err))

// })

module.exports = router

