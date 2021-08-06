const express=require('express')
const router=express.Router()


router.get('/:name',require('../controller/addCouncil.js'))

module.exports=router