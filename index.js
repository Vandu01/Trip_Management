/*//adding public folder in existing directory(C:\Users\USER2023\Desktop\BACKEND/public)
//console.log(__dirname+'/public');

//alternative for above(better)
const path = require('path');
//console.log(path.join(__dirname, 'public'));

//setting parsers for forms
const express= require('express');
const app = express();

//can use form by this two lines
//setting parsers for forms(two lines)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setting up public static files
app.use(express.static(Path.join(__dirname,'public')));//kisi bhi req k liye static files public folder m milengi

//set ejs as a viewengine(by this line we can render ejs pages)
app.set('view engine', 'ejs');

//rout1
app.get("/",function(req,res){
    //res.send("chal rha hai");
    res.render("index");
});

app.get("/profile/harsh",function(req,res){
    res.send("chal rha hai");

});

app.listen(3000,function(){
   console.log("running") 
})

//no need to writh public in rendering/ejs pages)*/
const express = require('express');
const path = require('path');
const app = express();

// Form parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));  // ✅ fixed "Path" → "path"

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to home page (renders views/index.ejs)
app.get("/", function (req, res) {
    res.render("index");
});

// Example route(:harsh is dynamic part)
app.get("/profile/:username", function (req, res) {
   // req.params.harsh
    //req.params.username
    //res.send(req.params.username);//get username val in res
    res.send(`welcome,${req.params.username}`)
});

app.get("/profile/:username/:age", function (req, res) {
    //res.send("working");
    res.send(`welcome,${req.params.username} of age ${req.params.age}`)
});

// Start the server
app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
