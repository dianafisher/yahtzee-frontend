/*global define*/

define([
  'underscore',
  'backbone',
  'models/User'
], function (_, Backbone, UserModel) {
  'use strict';

  var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: 'http://localhost:12080/_ah/api/yahtzee/v1/user',

    parse: function(response) {
        console.log(response);
        return response.users;
    }
  });

  return UserCollection;
});
