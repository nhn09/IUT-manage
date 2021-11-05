const express = require('express')
const tveCourses = require('../../model/tveCourse')
const router = express.Router();
const commonCourse = require("../../model/commonCourseModel");

router.get('/:id', async (req,res)=>{
    try {
        const parameter = req.params.id
        console.log(parameter)
        const Course = await tveCourses.find({semester:parameter}).exec();
        res.send(Course)
    } catch (error) {
        res.json(error)
    }
})

router.post("/:id", async(req, res) => {

    try {
      const alreadyExists = await tveCourses.findOne({ coursecode: req.body.coursecode }).exec();
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
  
      const tveCourseSave = new tveCourses({
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
      tveCourseSave
        .save()
        .then(() => res.json({message:"Saved both the places."}))
        .catch((err) => console.log(err));
  }
  
  else{
    res.json({message:"Course already exists."})
  }
  
    } catch (error) {
      
    }
  
    
  
  
    
  
      
  });

module.exports = router