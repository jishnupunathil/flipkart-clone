const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup=async(req,res)=>{

    try {
        const user = await User.findOne({ email: req.body.email });
    
        if (user) {
          return res.status(400).json({
            error: "User already registered",
          });
        }
    
        const { firstName, lastName, email, password } = req.body;
    
        const _user = new User({
          firstName,
          lastName,
          email,
          password,
          username: Math.random().toString(),
        });
    
        const savedUser = await _user.save();
    
        return res.status(201).json({
          message: "User created successfully",
          
        });
      } catch (error) {
        return res.status(400).json({
          message: "Something went wrong"+error,
        });
      }

}

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
 

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (!user.authenticate(req.body.password)) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const { _id,firstName, lastName, email, role, fullName } = user;
    return res.status(200).json({
      token,
      user: { _id,firstName, lastName, email, role, fullName },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.requireSignIn=(req,res,next)=>{
 const token =req.headers.authorization.split(" ")[1];
 const user=jwt.verify(token,process.env.JWT_SECRET)
 req.user=user;
 next();

}