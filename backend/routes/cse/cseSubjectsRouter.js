const express = require("express");
const Courses = require("../../model/cseCourse");
const router = express.Router();
const commonCourse = require("../../model/commonCourseModel");

router.get("/:id", async (req, res) => {
  try {
    const parameter = req.params.id;
    console.log(parameter);
    const cseCourse = await Courses.find({ semester: parameter }).exec();
    res.send(cseCourse);
  } catch (error) {
    res.json(error);
  }
});

//TODO  POST API

// router.post("/:id", async (req, res) => {
//     const newCourse = req.body;
//     const result = await cseCourses.insertOne()
//   console.log("cse semester wise subject");
//   res.send("CSE port hitted");
// });

router.post("/:id", async(req, res) => {

  try {
    const alreadyExists = await Courses.findOne({ coursecode: req.body.coursecode }).exec();
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

    const cseCourseSave = new Courses({
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
    cseCourseSave
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

module.exports = router;
