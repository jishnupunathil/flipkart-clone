const express = require("express");
const { signup,signin } = require("../../controllers/admin/auth");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signup",validateSignupRequest,isRequestValidated,signup);
router.post("/admin/signin",validateSigninRequest,isRequestValidated,signin);



// router.post("/profile",requireSignIn,(req,res)=>{
//     res.status(200).json({user:"welcome dear user"})

// })


module.exports = router;
