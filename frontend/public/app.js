// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");// to use ejs

app.use(bodyParser.urlencoded({ extented: true }));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index");
});

app.post("/",function(req,res){
    var methodName = req.body.name;
    console.log(req.body);
    
})


app.listen(process.env.PORT || 3000);