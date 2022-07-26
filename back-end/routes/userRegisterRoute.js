const express = require("express");
const router = express.Router();

const {registerUser, loginUsere, getAuthUserData} = require('../controller/userRegisterController')
const {protect} = require('../middleware/authMiddleware')

router.post('/register',registerUser)
router.post('/login', loginUsere)
router.get('/userauthdata', protect, getAuthUserData)

module.exports = router;