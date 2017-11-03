// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.local.js');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;

  //login page
  app.get('/', function(req, res) {
    var credentials = dsConfig.myEmailDataSource.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });

  
  };
