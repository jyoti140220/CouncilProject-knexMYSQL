const express=require('express')
const router=express.Router()

router.delete('/:name',require('../controller/deleteCouncil.js'))


module.exports=router