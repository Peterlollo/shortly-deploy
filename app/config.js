var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortly-deploy');

var db = mongoose.connection;

db.on('error', console.error.bind(console.log(console, 'Connection error:')));
db.once('open', function(){
  console.log('We are connected!');
});

module.exports = db;