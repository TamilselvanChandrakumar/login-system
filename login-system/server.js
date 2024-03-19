const express = require("express");
const app = express();
const path = require("node:path");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

//load a static file

app.use("/static", express.static(path.join(__dirname, "public")));

// home route
app.get("/", (req, res) => {
  res.render("base", { title: "login system" });
});

app.listen(port, () => {
  console.log("server started on port", port);
});
