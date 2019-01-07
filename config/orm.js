var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};
module.exports = orm;
// selectAll()
// insertOne()
// updateOne()

// app.get("/", function (req, res) {
//     connection.query("SELECT * FROM burgers;", function (err, data) {
//         if (err) throw err;
//         res.render("index", { burgers: data })
//     })
// })

// app.post('/create', function (req, res) {
//     connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burger], function (err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     })
// });

// app.put("/update", function (req, res) {
//     console.log('hello from server!');
//     connection.query("UPDATE burgers SET devoured = (true) WHERE id = (?);", [req.body.id], function (err, result) {
//         if (err) throw err;
//         connection.query("SELECT * FROM burgers;", function (err, data) {
//             if (err) throw err;
//             res.render("index", { burgers: data })
//         })
//         // res.render("index", { burgers: result })
//     })
// });

