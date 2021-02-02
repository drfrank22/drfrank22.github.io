const path = require("path");
const router = require("express").Router();

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"))
});

router.get("/aboutme", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/aboutme.html"))
});

router.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/portfolio.html"))
});

router.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"))
});

module.exports = router;