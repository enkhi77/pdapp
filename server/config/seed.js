/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');

Product.find({}).remove(function() {
  Product.create({
    company: 'SET',
    category: 'antisweat',
    partnum: 'DM00001-Kit',
    name: 'Dual voltage, dual temperature, 120V & 240V operation; Includes one control, two sensors and power cord.',
    price: 390,
    watt: null,
    estar: false
  }, {
    company: 'NRM',
    category: 'motor',
    partnum: 'MEG142-15CW1075U',
    name: '1/5hp, available in 115v and 208-230V, 1ph, 60/50hz, 1075 RPM CW shaft end rotation 4" shaft length with 1/2" diameter, 2 pin Lyall type plug and ground wire This motor can be mounted by the front, rear clamp bolts or by the belly Warranty: 1 Year',
    price: 208,
    watt: null,
    estar: false
  }, {
    company: 'MaxLite',
    category: 'extled',
    partnum: 'ELLF135UM50',
    name: '71929 HIGH OUTPUT FLOODLIGHT 135W UNIV 120-277V MEDIUM 55DEG 5000K',
    price: 617,
    watt: 135,
    estar: true
  },  {
    company: 'American Bright',
    category: 'intled',
    partnum: 'AB-STS-48C50100A-S',
    name: 'STS SERIES: 48", CLEAR, 5000K CCT, 100mA, ANGLED, CENTER',
    price: 65,
    watt: null,
    estar: false
  },  {
    company: 'HiLumz',
    category: 'intled',
    partnum: 'DZ40-55K-DV40-277-Y',
    name: 'HiLumz Diamonz 40W LED Retrofit Kit',
    price: 164,
    watt: 40,
    estar: true
  },{
    company: 'Pacific Advanced Lighting',
    category: 'intled',
    partnum: 'HBCC15HU500000',
    name: '150W LED Highbay, 5000K, 13000+ lm, 100-277VAC',
    price: 285,
    watt: 150,
    estar: false
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    address: '1234 Main St',
    city: 'Denver',
    state: 'CO',
    zip: '80031',
    phone: '3031231234'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    address: '1234 Main St',
    city: 'Denver',
    state: 'CO',
    zip: '80220',
    phone: '4041231234'
  }, function() {
      console.log('finished populating users');
    }
  );
});
