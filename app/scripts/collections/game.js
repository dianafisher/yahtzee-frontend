/*global define*/

define([
  'underscore',
  'backbone',
  'models/Game'
], function (_, Backbone, GameModel) {
  'use strict';

  var GameCollection = Backbone.Collection.extend({
    model: GameModel,
    url: 'http://localhost:12080/_ah/api/yahtzee/v1/game'
  });

  return GameCollection;
});
