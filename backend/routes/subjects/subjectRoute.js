const Subject = require('../../model/btmCourse')
const express = require('express')
const router = express.Router();

router.get('/:cid', async (req,res)=>{
    try {
        const parameter = req.params.cid
        const subject = await Subject.find({coursecode:parameter}).exec();
        res.json({subject})
    } catch (error) {
        res,json({message:error})
    }
})

module.exports = router
