const orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne('burgers', name, function(res) {
      cb(res);
    });
  },
  updateOne: function(name, cb) {
    orm.updateOne('burgers', name, cb, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
