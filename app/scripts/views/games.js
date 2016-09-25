/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/game'
], function ($, _, Backbone, JST, GameView) {
  'use strict';

  var GamesView = Backbone.View.extend({
    template: JST['app/scripts/templates/games.ejs'],

    tagName: 'div',

    id: '',

    className: 'games-view',

    events: {},

    initialize: function () {
      this.listenTo(this.collection, 'add', this.addOne);
      this.collection.fetch();
    },
    
    render: function () {
      this.$el.html(this.template());
      console.log(this.collection.models);
      _.each(this.collection.models, function(game){
          console.log(game);
          var view = new GameView( {model: game} );
          var list = $('game-list', this.el);
          list.append(view.render().el);
      }, this);

      return this;
    },

    addOne: function(game){
      console.log(game);
      var view = new GameView( {model: game} );
      var list = $('#game-list', this.el);
      list.append(view.render().el);
      
    },
  });

  return GamesView;
});
