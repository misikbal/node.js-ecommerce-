const express = require("express")
const router = express.Router()
const user=require("../controllers/user")

router.get("/iletisim", user.getContact)

router.post("/iletisim", user.postContact)
module.exports = router;