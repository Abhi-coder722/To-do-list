const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
// console.log(date()); if we console log this statement without the brackets then it will just print the function but for the function call you need to write the brackets.

var items = ["Cook food","eat food"];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    let day=date.getDate();
    res.render("list", { KindOfDay: day, newListItems: items })
});


app.post("/", function (req, res) {
    var item = req.body.newItem;
    if(item!=""){
        items.push(item);
    }
    res.redirect("/");
})

const port=process.env.PORT || 3000;
app.listen(port);
    // console.log("Server is Up!");;