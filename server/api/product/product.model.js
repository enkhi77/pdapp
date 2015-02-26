'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  company: String,
  partnum: String,
  name: String,
  price: Number,
  watt: Number,
  estar: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
