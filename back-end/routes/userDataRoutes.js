const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getUserData,
  postUserData,
  updateUserData,
  deleteUserData,
} = require("../controller/userDataController");

router.get("/getuserdata", protect, getUserData);
router.post("/postuserdata", protect, postUserData);
router.put("/updateuserdata/:id", protect, updateUserData);
router.delete("/deleteuserdata/:id", protect, deleteUserData);

module.exports = router;