const express = require("express");
const router = express.Router();

const credential = {
  email: "tamil@gmail.com",
  password: 123,
};

// login user

router.post("/login", (req, res) => {
  if (
    req.body.email == credential.email &&
    req.body.password == credential.password
  ) {
    req.session.user = req.body.email;
    // res.redirect("/dashboard");
    res.end("loggin successfull");
  } else {
    res.end("invalid username");
  }
});
module.exports = router;
