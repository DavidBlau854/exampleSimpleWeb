var express = require('express');
var router = express.Router();

let names = ['a', 'b', 'c']

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(names);
});

router.post('/', function (req, res, next) {
  const body = req.body
  names.push(body["name"])
  res.send(names);
});

module.exports = router;
