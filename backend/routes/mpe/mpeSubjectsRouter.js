const express = require('express')
const mpeCourses = require('../../model/mpeCourse')
const router = express.Router();
const commonCourse = require("../../model/commonCourseModel");

router.get('/:id', async (req,res)=>{
    try {
        const parameter = req.params.id
        console.log(parameter)
        const Course = await mpeCourses.find({semester:parameter}).exec();
        res.send(Course)
    } catch (error) {
        res.json(error)
    }
})

router.post("/:id", async(req, res) => {

    try {
      const alreadyExists = await mpeCourses.findOne({ coursecode: req.body.coursecode }).exec();
  if(!alreadyExists)
  {
    const course = new commonCourse({
      title: req.body.title,
      mail: req.body.mail,
  
      coursecode: req.body.coursecode,
  
      description: req.body.description,
  
      courseTeacher: req.body.courseTeacher,
  
      courseCreationDate: req.body.courseCreationDate,
  
      rating: req.body.rating,
  
      totalEnrolled: req.body.totalEnrolled,
  
      semester: req.body.semester,
      chapters: req.body.chapters,
    });
  
    course
      .save()
      .then(
    
        (data) =>{ res.json(data)
        
          
        
        }
        )
      .catch((err) => console.log(err));
      const ToSave = req.body
  
      const mpeCourseSave = new mpeCourses({
        title: ToSave.title,
        mail: req.body.mail,
    
        coursecode: req.body.coursecode,
    
        description: req.body.description,
    
        courseTeacher: req.body.courseTeacher,
    
        courseCreationDate: req.body.courseCreationDate,
    
        rating: req.body.rating,
    
        totalEnrolled: req.body.totalEnrolled,
    
        semester: req.body.semester,
        chapters: req.body.chapters,
      });
      mpeCourseSave
        .save()
        .then(() => res.json({message:"Saved both the places."}))
        .catch((err) => console.log(err));
  }
  
  else{
    res.json({message:"Course already exists.", found:alreadyExists})
  }
  
    } catch (error) {
      
    }
  
    
  
  
    
  
      
  });



module.exports = router