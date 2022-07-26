const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const userData = require("../modal/userDataModal");
const multer = require("multer");

const {
  getUserData,
  postUserData,
  updateUserData,
  deleteUserData,
} = require("../controller/userDataController");



// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },  
// });
// const upload = multer({storage: storage});

// router.post("/postuserdata", protect, upload.single("image"), (req, res) => {
//   console.log(req.file);
//   if (!req.body.text) {
//     res.status(400).json({
//       message: "enter data",
//     });
//   }
//   const profile = userData.create({
//     text: req.body.text,
//     image:req.body.image,
//     user: req.user.id,
//   });
//   res.status(200).json(profile);
// });
router.get("/getuserdata", protect, getUserData);
router.post("/postuserdata", protect, postUserData);
router.put("/updateuserdata/:id", protect, updateUserData);
router.delete("/deleteuserdata/:id", protect, deleteUserData);

module.exports = router;
