var connection = require('../config/connection.js');

function questionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function sqlObj(ob) {
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
        var string = "SELECT * FROM " + tableInput + ";";
        connection.query(string, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var string = "INSERT INTO " + table;
        string += " (";
        string += cols.toString();
        string += ") ";
        string += "VALUES (";
        string += questionMarks(vals.length);
        string += ") ";
        connection.query(string, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function(table, cols, condition, cb) {
        var string = "UPDATE " + table;
        string += " SET ";
        string += sqlObj(cols);
        string += " WHERE ";
        string += condition;
        connection.query(string, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};
module.exports = orm;


