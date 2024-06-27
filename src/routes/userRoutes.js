const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const router = express.Router();

router.get(
  "/profile",
  authenticateToken,
  authorizeRoles("user", "admin"),
  getUserProfile
);

module.exports = router;
