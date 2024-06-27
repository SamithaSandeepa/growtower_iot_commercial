const express = require("express");
const { createTower, getTowers } = require("../controllers/towerController");
const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const router = express.Router();

router.post(
  "/towers",
  authenticateToken,
  authorizeRoles("user", "admin"),
  createTower
);
router.get(
  "/towers",
  authenticateToken,
  authorizeRoles("user", "admin"),
  getTowers
);

module.exports = router;
