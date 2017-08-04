var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var query = `SELECT * FROM ${tableInput};`;
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var query = `INSERT INTO ${table} (${cols})
                  VALUES (?);`;
    var values = [vals];

    console.log(query, values);

    connection.query(query, values, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
 
  update: function(table, eatenBool, burgerID, cb) {
    var query = `UPDATE ${table} SET devoured = ? WHERE id = ?;`;

    var values = [eval(eatenBool), burgerID];

    console.log(query, values);
    connection.query(query, values, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object 
module.exports = {all: orm.all,
                  create: orm.create,
                  update: orm.update};

