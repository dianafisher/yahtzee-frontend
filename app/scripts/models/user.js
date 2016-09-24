/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var UserModel = Backbone.Model.extend({
    idAttribute: 'urlsafe_key',
    // url: 'http://localhost:12080/_ah/api/yahtzee/v1/user',

    initialize: function() {
      console.log('UserModel initialize');
    },

    defaults: {
      user_name: 'Unknown',
      email: 'unknown@email.com',
      high_score: '0'      
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      console.log(response);
      return response;
    }
  });

  return UserModel;
});
