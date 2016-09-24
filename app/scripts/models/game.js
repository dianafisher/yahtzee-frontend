/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var GameModel = Backbone.Model.extend({
    idAttribute: 'urlsafe_key',
    // urlRoot: 'http://localhost:12080/_ah/api/yahtzee/v1/game',
    // url: function() {
    //   return this.urlRoot + '/' + this.id;
    // },

    initialize: function() {
      console.log('GameModel initialize');
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      console.log(response);
      return response;
    }
  });

  return GameModel;
});
