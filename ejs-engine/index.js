const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT | 1234;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
