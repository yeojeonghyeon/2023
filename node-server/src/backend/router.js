const express = require("express");
const router = express.Router();

router.get('/main', (req, res)=>{
    res.render('main', {title: 'hello node!!!'});
});

router.get('/about', (req, res)=>{
    res.render('about', {title: "about"});
});

module.exports = router;