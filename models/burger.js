// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
};
module.exports = burger;
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
// Export the database functions for the controller (burgersController.js).

