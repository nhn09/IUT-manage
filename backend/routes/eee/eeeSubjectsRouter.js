const express = require('express')
const eeeCourses = require('../../model/eeeCourse')
const commonCourse = require("../../model/commonCourseModel");
const router = express.Router();

router.get('/:id', async (req,res)=>{
    try {
        const parameter = req.params.id
        console.log(parameter)
        const Course = await eeeCourses.find({semester:parameter}).exec();
        res.send(Course)
    } catch (error) {
        res.json(error)
    }
})


//post

router.post("/:id", async(req, res) => {

    try {
      const alreadyExists = await eeeCourses.findOne({ coursecode: req.body.coursecode }).exec();
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
  
      const eeeCourseSave = new eeeCourses({
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
      eeeCourseSave
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