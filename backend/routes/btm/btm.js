const express = require('express')
const btm = require('../../model/Semester')
const router = express.Router();

router.get('/:deptName', async (req,res)=>{
    try {
        const semesters = await btm.find();
        res.send(semesters)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router