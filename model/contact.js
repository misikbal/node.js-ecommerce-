const mongoose = require("mongoose")


const iletisimSema = mongoose.Schema({
    name: {
        type:String,
        required:true["Lütfen Adınızı Yazınız"]
    },
    mail: {
        type: String,
        required:true["Lütfen Mail Adresini Yazınız"]
    },
    message: {
        type: String,
        required:true["Lütfen Mesajınızı Yazınız"]
    }

})

module.exports=mongoose.model("contact",iletisimSema)