let express = require('express');
let app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
let filePath = __dirname+"/views/";
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

var db=[];

app.use(express.static('img'));
app.use(express.static('css'));


app.get("/",function(req,res){
    let fileName = filePath + "index.html";
    res.sendFile(fileName);
});

app.get("/addTask", function(req,res){
    let fileNme = filePath + "registration.html";
    res.sendFile(fileNme);
});

app.post("/register", function(req,res){
    db.push(req.body);
    let fileNme = filePath + "registration.html";
    
    res.sendFile(fileNme);
});

app.get("/showAll", function(req,res){
    
    db.push(req.body);
    res.render("allcustomers",{mytask:db});
});


app.listen(8080);