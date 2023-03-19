const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
//const mongodb=mongodb();
const mongoose = require("mongoose");

const userRoutes = require("./router/user");
app.set("view engine", "pug");
app.set("views", "./views");
port=8000

const mongodbsession="mongodb+srv://springdayAdmin:A1b2c3d4.@cluster0.pwmu2.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongodbsession).then(deger=>{
    console.log("Veri tabanına bağlandı.")
    app.listen(port, () => {
        console.log("HTTP Proje çalıştırıldı " + port)
    });
    }).catch(hata=> {
        console.log(hata, " Bir sorun var")

    })


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "wwwroot"), { maxAge: 86400000 }));
app.use(express.json())
app.use(userRoutes)