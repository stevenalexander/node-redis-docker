var express = require('express')
var router = express.Router()

var redis = require('redis')
var client = redis.createClient()

client.on('error', function (err) {
  console.log('Error ' + err)
})

/* GET home page. */
router.get('/', function (req, res) {
  var values = []

  client.hgetall('values', function (err, obj) {
    if (err) {
      console.log('Error ' + err)
      res.render('index', {title: 'Node Redis', values: null})
    } else {
      console.dir(obj)
      values.push(obj.test)
      res.render('index', {title: 'Node Redis', values: values})
    }
  })
})

router.post('/redis', function (req, res) {
  var test = req.body.test

  console.log('test: ' + test)

  client.hmset('values', { 'test': test })

  // redis integration
  res.redirect('/')
})

module.exports = router
