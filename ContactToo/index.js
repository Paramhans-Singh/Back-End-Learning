
const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
const Contact = require("./models/contact");

app.use(express.urlencoded());
app.use(express.static("./assets"));

app.set("view engine","ejs");
app.set("views","./views");


app.get("/", async function(req,res){
    try {
        let contactList = await Contact.find({});

        return res.render("home",{
            title:"ContactTOO",
            contact_list:contactList
        });
    } catch (error) {
        console.log("Error in finding user",error);
        return;
    }
    });


app.get("/delete-contact",async function(req,res){
    try {
        console.log(req.query);
    let id = req.query.id;

    let contactIndex = await Contact.findByIdAndDelete(id);
    res.redirect('back');

    } catch (error) {
         console.log("Error in deleting user",error);
        return;
    }
    
});

app.post("/create-contact",async function(req,res){
    try {
        let contact = await Contact.create({
            name:req.body.name,
            phone:req.body.phone
        });
            console.log("*****",contact);
            return res.redirect("back");

    } catch (error) {
        console.log("Error in creating user",error);
        return;
    }
    });


app.listen(port,function(err){
    if(err){
        console.log("Error in creating server!!",err);
        return;
    }
    console.log("Server is running!!",port);
});

