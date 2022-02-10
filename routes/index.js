var express = require('express');
var router = express.Router();

let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let timestamp = day + "/" + month + "/" + year;




const messages = [
  {
    text: "Hi there!",
    user: "Hank",
    added: "01/22/2022"
  },
  {
    text: "What's up!",
    user: "Flowers!",
    added: "01/24/2022"
  },
]



router.post('/new', function(req, res, next) {
  messages.push({text: req.body.usermessage, user: req.body.username, added: timestamp })
  res.redirect('/')
})




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Mini Messageboard',
    messages: messages

  });
});

module.exports = router;
