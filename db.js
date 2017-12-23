var mongoose = require('mongoose');
//mongodb://mongo:27017/blog', function(err, db)
//mongoose.connect('mongodb://mongo:27017/test', function(err, db) { useMongoClient: true });
mongoose.connect(process.env.DB_URL, { useMongoClient: true });