const express=require('express')
const router=express.Router()

router.use('/',require('./deleteCouncil'))
router.use('/',require('./addCouncil.js'))

module.exports=router