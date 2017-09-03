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
  burger.create([req.body.burger_name, req.body.devoured],
    function() {
      res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/');
  });
});

module.exports = router;
