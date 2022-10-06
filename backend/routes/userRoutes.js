const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");

router.route("/").get(protect, allUsers);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
