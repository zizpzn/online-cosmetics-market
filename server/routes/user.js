const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

router.post("/signup", signup, userSignupValidator);
router.post("/signin", signin);

module.exports = router;
