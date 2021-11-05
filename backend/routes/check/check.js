const express = require('express')
const Course = require('../../model/btmCourse')
const router = express.Router();

router.get('/', async (req,res)=>{
    try {
        const course = await Course.find();
        res.json({course})
    } catch (error) {
        res,json({message:error})
    }
})



router.post('/',(req,res)=>{

    const course = new Course({
        title:req.body.title,
        coursecode:req.body.coursecode,
        courseCreationDate:req.body.courseCreationDate,
        totalEnrolled:req.body.totalEnrolled,
        rating:req.body.rating,
        courseTeacher:req.body.courseTeacher,
        description:req.body.description

    })
    course.save()
    .then(data=>res.json(data))
    .catch(err=>console.log(err))

})

module.exports = router

