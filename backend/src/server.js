const express = require('express');
const env=require('dotenv');
const app=express();
const mongoose = require('mongoose');
const path = require("path");
const cors=require('cors');

//routes

const authRoutes=require('./routes/auth')
const adminRoutes=require('./routes/admin/auth')
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

//environment variable
env.config()
app.use(cors())
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/api',authRoutes);
app.use('/api',adminRoutes)
app.use("/api",categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

//mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.qkkqehk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Database Connected');
});





app.listen(process.env.PORT ,()=>{
    console.log(`Server running on  ${process.env.PORT}`);
})