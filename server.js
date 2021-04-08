const express = require("express");
const path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "src")));
app.use("/*", express.static(path.join(__dirname, "src")));
//Server listing
app.listen(process.env.PORT || 8081, (status) => {
    console.log("server is running")
});