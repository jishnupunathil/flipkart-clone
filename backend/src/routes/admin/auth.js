const express = require("express");
const { signup,signin, requireSignIn } = require("../../controllers/admin/auth");
const router = express.Router();

router.post("/admin/signup",signup);
router.post("/admin/signin",signin);



// router.post("/profile",requireSignIn,(req,res)=>{
//     res.status(200).json({user:"welcome dear user"})

// })


module.exports = router;
