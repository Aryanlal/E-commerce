const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const seedDB = require("./seed.js");
const productroutes = require("./routes/product");
const reviewRoutes = require("./routes/review");
const ejsMate = require("ejs-mate");
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');



let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }
app.engine("ejs" , ejsMate);
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views")); //views folder

app.use(express.static(path.join(__dirname , "public"))); //public folder
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session(configSession));
app.use((req , res , next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash('error');
    next();
})
mongoose.connect('mongodb://127.0.0.1:27017/shooping-sam-app')
.then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log("some error");
})

//seedDB()
app.use(productroutes); // har incoming request pe chal jaye
app.use(reviewRoutes); // har incoming request pe chal jaye

app.listen(8080 , ()=>{
    console.log("server connected at port 8080");
});