var mongoose = require('mongoose');

var db = function(){
  return {
    config: function(conf){
      mongoose.connect('mongodb://localhost/movierating');
      var db = mongoose.connection;
      db.on('error', console.log.bind(console, 'Connection Error'));
      db.once('open', function(){
        console.log('Database is Open...');
      });
    }
  }
}

module.exports = db();
