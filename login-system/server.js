const express = require("express");
const app = express();
const path = require("node:path");
const bodyparser = require("body-parser");
const router = require("./router.js");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//load a static file

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

// home route
app.get("/", (req, res) => {
  res.render("base", { title: "login system" });
});

app.listen(port, () => {
  console.log("server started on port", port);
});

app.use("/route", router);
