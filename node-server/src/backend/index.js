const path = require("path");
const express = require("express");

const app = express();
const apiRouter = require("./router.js");

app.set('views', path.join(__dirname, '../frontend'));
app.set('view engine', 'pug');
app.use('/', apiRouter);
var server = app.listen(3000, function(){
    console.log('server started');
});