const express=require("express")
const router=express.Router()
const admin=require("../controllers/admin")

router.get("/iletisim",admin.getContact)

router.get("/login",admin.getLogin)
router.post("/login",admin.postLogin)
module.exports = router;