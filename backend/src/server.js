const express = require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const app=express();
const mongoose = require('mongoose');

//routes

const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')

//environment variable
env.config()

app.use(bodyParser.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes)

//mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.qkkqehk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Database Connected');
});





app.listen(process.env.PORT ,()=>{
    console.log(`Server running on  ${process.env.PORT}`);
})