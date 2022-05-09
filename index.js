const keystone = require('keystone');

const path = require('path');

require('dotenv').config();

keystone.init({
  name: 'Keystone CMS',
  static: [path.join(__dirname, './public')],
  'admin path': 'admin',
  'auto update': true,
  port: process.env.PORT || 3001,
  mongo: 'mongodb://projectES:projectES20212@cluster0-shard-00-00.ks88s.mongodb.net:27017,cluster0-shard-00-01.ks88s.mongodb.net:27017,cluster0-shard-00-02.ks88s.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zj9i2u-shard-0&authSource=admin&retryWrites=true&w=majority',
  auth: true,
  'user model': 'User',
  'cookie secret': 'WatermelonSugarHIGHWatermelonSugarHIGHWatermelonSugarHIIIIIGH',
  'cloudinary config': 'cloudinary://929557927127856:FkNSnd7BBRs_scD2qFltGd4EcmA@dn9j97xdb',
});

keystone.import('./server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();
