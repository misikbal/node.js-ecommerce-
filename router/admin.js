const express=require("express")
const router=express.Router()
const admin=require("../controllers/admin")
const locals=require("../middleware/local")
router.get("/iletisim",locals,admin.getContact)


router.get("/login",locals,admin.getLogin)
router.post("/login",locals,admin.postLogin)
module.exports = router;

