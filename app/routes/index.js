var express = require('express')
var router = express.Router()

// var redis = require('redis')
// var client = redis.createClient()

// client.on('error', function (err) {
//  console.log('Error ' + err)
// })

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Node Redis'})
})

router.post('/redis', function (req, res) {
  var test = req.body.test

  console.log('test: ' + test)

  // redis integration
  res.redirect('/')
})

module.exports = router
