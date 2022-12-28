const express = require("express");
const proxy = require("express-http-proxy")
const port = process.env.PORT || 8080;
const app = express();
const URL ='https://healthtrackerrest-production-f63f.up.railway.app'
app.use("/",proxy(URL))
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");