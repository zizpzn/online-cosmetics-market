const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

router.post("/signup", signup, userSignupValidator);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
