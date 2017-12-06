const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', { useMongoClient: true });
mongoose.Promise = Promise;

module.exports = mongoose;
