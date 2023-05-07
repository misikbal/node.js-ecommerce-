const Contact=require("../model/contact")
const AdminLogin=require("../model/admin")
const bcrypt=require("bcrypt")
exports.getContact=(req,res,next)=>{
    Contact.find()
    .limit(5)
    .then(contact=>{
        res.render("adminpanel/index",{
            title:"Admin İletişim Paneli",
            contacts:contact
        })
    })
    
}

exports.getLogin=(req,res,next)=>{
    res.render("adminpanel/login",{
        title:"Admin Login Sayfası"
    })
}
exports.postLogin=(req,res,next)=>{
    const mail=req.body.mail;
    const password=req.body.password;

    const loginModel=new AdminLogin({
        email:mail,
        password:password
    })
    loginModel.validate()
    .then(()=>{
        AdminLogin.findOne({email:mail}).then(admin=>{
            if(admin){

            }
        })
    })
}

