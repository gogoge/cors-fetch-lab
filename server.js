var express = require("express");
var app = express();

app.post("/test", function(req, res) {
  const frontendDomain = "http://localhost:3000";
  res.set({
    "Access-Control-Allow-Origin": frontendDomain,
    "Access-Control-Allow-Credentials": true,
  });
  res.cookie("whateverName", "whateverValue", {
    maxAge: 900000,
    httpOnly: true,
  });
  res.json({
    body: {
      test: "success",
    },
  });
});

app.listen(1234);
console.log("Express started on port 1234");
