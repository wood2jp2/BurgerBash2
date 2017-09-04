const
  express = require('express'),
  router = express.Router(),
  burger = require('../models/burger.js');

// this gets all the burgers added in the DB and displays them on the page.
router.get('/', function(req, res) {
  // passing the data received (all burgers) as a parameter and assigning to hbsObject variable.
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// adds new burgers to DB and list
router.post('/', function(req, res) {
  // calls burger function insertOne, gives it column name and new burger name, and callback function
  burger.insertOne('burger_name', req.body.name,
    function() {
      res.redirect('/');
    });
});

// updates the devoured state for burgers
router.put('/:id', function(req, res) {
  // this finishes the previous sequel query in burger.js
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/');
  });
});

module.exports = router;
