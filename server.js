const express = require("express");
const proxy = require("express-http-proxy")
const port = process.env.PORT || 8080;
const app = express();
const URL ='https://healthtrackerrest-production-f63f.up.railway.app'

app.use(express.static(__dirname + "/dist/"));

app.use("/api",proxy(URL))

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");