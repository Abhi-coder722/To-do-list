const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    var today=new Date();
    var curr_day=today.getDay();
    var day="";
    switch(curr_day){
        case 1:
        day="Monday";
        break;
    
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wedneday";
        break;
    case 4:
        day="Thrusday";
        break;
    case 5:
        day="Friday";
        break;

    }
    res.render("list",{KindOfDay:day})
});

app.listen(3000,function(){
    console.log("Server is Up!");
});