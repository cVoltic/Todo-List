//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //require a module locating at the current directory name

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//tell express to use our css in our css folder
app.use(express.static("public"));

//tell our app to use ejs
//enable template building for html file
app.set("view engine","ejs");


//For scoping, we the variables that we pass around will need to be global
const items = ["buy food", "cook food", "eat food"];
const workItems = [];

app.get("/",function(req,res){
    const day = date.getDate();
    //Must provide both ejs when we initially get
    res.render("list", 
        { listTitle: day,
        newListItems: items}
    );
});

//handle post request
//reuse EJS Template as many time as we like -> if each page has same functionality
app.post("/", function (req, res) {
    const item = req.body.newItem;
    //When the post request is trigger on our homeroute,
    //Save the newItem value and then redirect to our homeroute
    //homneroute will then render the new list item to the list template
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else {
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/Work", function(req, res){
    let day = date.getDay();
    res.render("list", {listTitle: "Work List " + day, newListItems: workItems});
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});