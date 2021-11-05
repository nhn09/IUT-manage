const express = require('express')
const indivisualCourses = require('../../model/commonCourseModel')
const router = express.Router();

router.get('/:id', async (req,res)=>{
    try {
        const parameter = req.params.id
        console.log(parameter)
        const indivisualCourse = await indivisualCourses.find({coursecode:parameter}).exec();
        res.send(indivisualCourse)
    } catch (error) {
        res.json(error)
    }
})

// router.patch('/:id', async(req,res)=>{
//     try {

// const updatedCourse = await indivisualCourses.updateOne({_id:req.params.id}, {$set: chapters[chapters.length]:{

// }}) //TODO

// indivisualCourses.findOne(_id : itemId ).then(doc => {
//   item = doc.items.id(itemId );
//   item["name"] = "new name";
//   item["value"] = "new value";
//   doc.save();

//   //sent respnse to client
// })
//     } catch (error) {
//         console.log(error);
//     }
// } )


module.exports = router