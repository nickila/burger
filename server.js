var express = require("express");
//var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
//var PORT = process.env.PORT || 8080;
var app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
app.use(methodOverride("_method"))
//app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.use(express.static("public"));

app.use(express.urlencoded({ exteded: true }));
app.use(express.json());

//var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var port = 3000;
var routes = require("./controllers/burgers_controller.js");
app.use(routes);



var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "coppeR##6531",
    database: "burgers_db"

});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId);
});

app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) throw err;
        res.render("index", { burgers: data })
    })
})

app.post('/create', function (req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burger], function (err, result) {
        if (err) throw err;
        res.redirect("/");
    })
});

app.put("/update", function (req, res) {
    console.log('hello from server!');
    connection.query("UPDATE burgers SET devoured = (true) WHERE id = (?);", [req.body.id], function (err, result) {
        if (err) throw err;
        connection.query("SELECT * FROM burgers;", function (err, data) {
            if (err) throw err;
            res.render("index", { burgers: data })
        })
        // res.render("index", { burgers: result })
    })
});
// Require the following npm packages inside of the server.js file:

// express
app.listen(port, function () {
    console.log("Server listening on: http://localhost:" + port);
});