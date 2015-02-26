'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: String,
  phone: String,
  contact: String,
  city: String,
  address: String,
  address2: String,
  state: String,
  zip: Number,
  energyco: String,
  energyrate: Number,
  taxrate: Number
});

module.exports = mongoose.model('Customer', CustomerSchema);
