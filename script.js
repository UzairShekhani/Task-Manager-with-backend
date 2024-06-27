const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function(req, res){
    fs.readdir()
    res.render("index")
}) 
app.listen(3000)