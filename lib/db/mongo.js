'use strict';

var mongoose = require('mongoose'),
	config = require('../config/config');

exports.mongoose = mongoose;


var mongoOptions = { db: { safe: true } };

// Connect to Database
mongoose.connect(config.db, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + config.db + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + config.db);
  }
});
