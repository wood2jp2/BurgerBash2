const orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    // console.log(vals);
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(name, cb) {
    orm.updateOne('burgers', name.toString(), cb, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
