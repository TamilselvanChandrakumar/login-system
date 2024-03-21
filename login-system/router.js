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
    res.redirect("/route/dashboard");
    // res.end("loggin successfull");
  } else {
    res.end("invalid username");
  }
});

// route for dashboard.

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("unathouraised user");
  }
});

// route for logout

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      res.render("base", { logout: "logout successfully" });
    }
  });
});

module.exports = router;
