const express=require('express');
const app=express()
var user=require('./route.js')
app.use('/council',user)
app.listen(3000,()=>{
    console.log("server running.......")
})