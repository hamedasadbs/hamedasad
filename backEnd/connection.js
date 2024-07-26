// var mysql = require("mysql");
// var express = require("express");
// var app = express();
// var cors = require("cors");

// const bodyParser = require("body-parser");

// var about = require("./about");

// //use cors lib for disable cors error
// app.use(
//   cors({
//     origin: "http://10.42.0.215:19000",
//     credentials: true,
//   })
// );
// //for parse body of request
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
// //connect to database
// var con = mysql.createConnection({
//   host: "server16.serverha.net",
//   user: "hamedasadbs",
//   password: "ha1999@@",
//   database: "hamedasa_hamedasadb",
// });
// //check connection
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL Server!");
// });

// about.getAbout(app, con);

// //setting port
// app.listen(3306);

/****************************************************************************/

var mysql = require("mysql");
var express = require("express");
var app = express();
var cors = require("cors");

const bodyParser = require("body-parser");

var about = require("./about");

//use cors lib for disable cors error
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//for parse body of request
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
//connect to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hamedasa_hamedasadb",
});
//check connection
con.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

about.getAbout(app, con);

//setting port
app.listen(8080);
