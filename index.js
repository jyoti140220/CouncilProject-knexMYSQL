const express=require('express');
const app=express()
app.use(express.json())
app.use('/council',require('./routers/index.js'))

app.listen(3000,()=>{
    console.log("server is running.........")
})