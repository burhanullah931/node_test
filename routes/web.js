const express = require("express");
const router = express.Router();
const path = require("path")

const bookRouter = require("./book");
const authRoutes = require('./auth');


router.get('/', (req, res) => {
    // res.send("hello world");
    // res.sendFile(path.join(__dirname + "./../pages/home.html"))
    res.render('index', {name:"ali"})
});

router.use("/book",bookRouter);
router.use('/auth',authRoutes);

router.all('/*', (req, res) => {
    res.send("Page not found")
});

module.exports = router