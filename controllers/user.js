

const Contact = require("../model/contact")



exports.getContact = (req, res, next) => {
    res.render("user/iletisim", {
        title: "İletişim Sayfası",
        action:req.query.action
    })
}

exports.postContact = (req, res, next) => {
    const name = req.body.name;
    const mail = req.body.gmail;
    const message = req.body.message;


    const emailToValidate = mail;
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegexp.test(emailToValidate)) {
        const contact = new Contact({
        name: name,
        mail: mail,
        message:message
        })
        contact.save().then(() => {
            res.redirect("/iletisim?action=send");
        })
    }
    else {
        res.redirect("/iletisim?action=mail")
    }
    
    
}