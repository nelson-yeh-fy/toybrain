var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);
});

router.get('/json', function (req, res) {
  res.status(200).json({name: 'hello'})
});

router.get('/error', function (req, res) {
  res.status(400).json({name: 'error hello'})
});

router.get('/json/5stimeout', function (req, res) {
    setTimeout(function(){
        res.json({name: 'you are patient'})
    },5000)
});

module.exports = router;