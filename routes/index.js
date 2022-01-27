var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message App', messages });
});

/* GET New page. */
router.get('/new', function(req, res, next) {
  res.render('form', { messages });
});

/* POST new message */
router.post('/new', function (req, res, next) {
  const text = req.body.text;
  const user = req.body.user;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect('/');
}) 
module.exports = router;
