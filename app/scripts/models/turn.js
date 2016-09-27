/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var TurnModel = Backbone.Model.extend({
    idAttribute: 'urlsafe_key',    
    // urlRoot: 'http://localhost:12080/_ah/api/yahtzee/v1/game',
    
    initialize: function(options) {
      
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

  return TurnModel;
});
