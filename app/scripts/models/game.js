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

    parse: function(game, options)  {
      // console.log(game);
      // console.log(game.category_scores);  
      // replace single quotes with double quotes.
      var updated = game.category_scores.replace(/\'/g, '"');
      var scores = JSON.parse(updated);
      // console.log(scores);
      // console.log(scores.FIVES);    
      
      game.category_scores = scores;
      console.log(game);
      return game;
    }    
  });

  return GameModel;
});
