

const Contact = require("../model/contact")



exports.getContact = (req, res, next) => {
    res.render("user/iletisim", {
        title: "İletişim Sayfası"
    })
}

exports.postContact = (req, res, next) => {
    const name = req.body.name;
    const mail = req.body.email;
    const message = req.body.message;

    const contact = new Contact({
        name: name,
        mail: mail,
        message:message
    })
    contact.save().then(() => {
        res.redirect("/iletisim?action=send");
    })
}