var express = require("express");
var htmlRoutes = require("./routes/htmlroutes")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });