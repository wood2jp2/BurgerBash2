const
  express = require('express'),
  router = express.Router(),
  burger = require('../models/burger.js');

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function(req, res) {
  burger.insertOne('burger_name', req.body.name,
    function() {
      res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/');
  });
});

module.exports = router;
