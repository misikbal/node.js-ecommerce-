

const Contact = require("../model/contact")



exports.getContact = (req, res, next) => {
    res.render("user/iletisim", {
        title: "İletişim Sayfası"
    })
}