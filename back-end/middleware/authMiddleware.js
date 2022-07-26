const userRegister = require("../modal/userRegister");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const protect =  async(req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ){
    try {
      token = req.headers.authorization.split(' ')[1];

      const decode = jwt.verify(token, process.env.TOKEN_SECRET);

      req.user = await userRegister.findById(decode.id).select("-password");
      console.log('token found')
      next();
    } catch (error) {
      console.log(error);
      console.log('token not authorized')
      res.status(400).json({
        message:'token not authorized'
      })
    }
  }
    else{
        console.log('token not found')
        res.status(400).json({
          message:'token not found'
        })
    }
};

module.exports = {
    protect
}
