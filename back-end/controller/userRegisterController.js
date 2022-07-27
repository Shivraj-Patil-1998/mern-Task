const userRegister = require("../modal/userRegister");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const { createJWT } = require("../auth/jwt");

const registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  userRegister
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new userRegister({
          name: name,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

const loginUsere = async (req, res) => {
  const { email, password } = req.body;

  const user = await userRegister.findOne({ email: email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(404).json({
      message: "emailor password not found",
    });
  }
};

const getAuthUserData = async (req, res) => {
  const { _id, name, email } = await userRegister.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  registerUser,
  loginUsere,
  getAuthUserData,
};
