const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('We are on discuss')
})

router.use('/',(req,res,next)=>{
    console.log(`Hello from middleware of discuss route!  `)
    next()
})

module.exports = router

