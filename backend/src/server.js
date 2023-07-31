const express = require('express');
const env=require('dotenv');
const app=express();


//environment variable
env.config()

app.get('/' ,(req,res)=>{

    res.status(200).json({
        message:'Hello World'
    })

})


app.listen(process.env.PORT ,()=>{
    console.log(`Server running on  ${process.env.PORT}`);
})