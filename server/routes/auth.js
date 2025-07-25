const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  healthCheck,
} = require("../controllers/userController");

const router = require("express").Router();

router.get("/health", healthCheck);
router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
