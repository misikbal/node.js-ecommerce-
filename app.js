const express = require("express");
const app=express();
//const mongodb=mongodb();
const mongoose=require("mongoose");
port=8000
// app.set("view engine", "pug");

const mongodbsession="mongodb+srv://springdayAdmin:A1b2c3d4.@cluster0.pwmu2.mongodb.net/?retryWrites=true&w=majority"
// port=8000


mongoose.connect(mongodbsession).then(deger=>{
    console.log("Veri tabanına bağlandı.")
    app.listen(port, () => {
        console.log("HTTP Proje çalıştırıldı " + port)
    });
    }).catch(hata=> {
        console.log(hata, " Bir sorun var")

    })
/*app.listen(port, () => {
    console.log("HTTP Proje calıştırıldı " + port);
});*/