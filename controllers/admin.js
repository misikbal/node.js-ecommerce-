const Contact=require("../model/contact")
const AdminLogin=require("../model/admin")
const bcrypt=require("bcrypt")
const ip=require("ip")

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
    // var sifre="123"
    // bcrypt.hash(sifre,12).then(hashsifre=>{
    //     console.log(hashsifre)
    //     const user=new AdminLogin({
    //         name:"ikbal",
    //         email:"ikbal.sirdas@gmail.com",
    //         password:hashsifre,
    
    
    //     })
    //     user.save()
    // })
    
    res.render("adminpanel/login",{
        title:"Admin Login Sayfası"
    })
}
exports.postLogin=(req,res,next)=>{
    const mail=req.body.mail;
    const password=req.body.sifre;
    
    const loginModel=new AdminLogin({
        email:mail,
        password:password
    })
    loginModel.validate()
    .then(()=>{
        
        AdminLogin.findOne({email:mail}).then(admin=>{
            console.log("1.adım")
            if(admin){
                bcrypt.compare(password,admin.password)
                .then(success=>{
                    console.log("2.adım")
                    if(success){
                        // req.session.admin=admin;
                        req.session.isAuthenticated=true;
                        return res.redirect("/admin/iletisim")
                    }
                })
            }
        })
    })
}

