const express = require("express");
const port = 4000;
const app = express();
const db = require("./config/mongoose");
const Task = require("./models/task");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded());
app.use(express.static("./assets"));


app.get("/", async function(req,res){
    try {
        let task = await Task.find({})
    return res.render("home",{
        title:"Task-Man",
        task_list : task
    });
    } catch (error) {
       console.log("Error in rendering task",error);
       return; 
    }
});


app.post("/create-task",async function(req,res){

    try {
        let task = await Task.create({
           name:req.body.name,
           descp:req.body.descp,
           deadline:req.body.deadline
        });

        console.log("*********",task);
        return res.redirect("back");
    } catch (error) {
        console.log("Error in caeting task",error);
        return;
    }
});

app.get("/delete-task",async function(req,res){

    try {
    console.log(req.query);
    let id = req.query.id;
    let taskIndex = await Task.findByIdAndDelete(id);

    res.redirect('back');

    } catch (error) {
         console.log("Error in deleting user",error);
        return;
    }
    
});


app.listen(port,function(err){
    if(err){
        console.log("Error in running server",err);
        return;
    }
    console.log("Server is running",port);
});