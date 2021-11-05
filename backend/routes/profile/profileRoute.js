const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('We are on profile')
})

router.use('/',(req,res,next)=>{
    console.log(`Hello from middleware of profile route!  `)
    next()
})

module.exports = router
