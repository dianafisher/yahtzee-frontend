/*global define*/

define([
  'jquery',
  'backbone',
  'views/home',
  'views/users',
  'views/games',
  'collections/user',
  'collections/game'
], function ($, Backbone, HomeView, UsersView, GamesView, UserCollection, GameCollection) {
  'use strict';

  var RouterRouter = Backbone.Router.extend({
    routes: {
        '' : 'index',
        'users': 'showUsers',
        'games': 'showGames'
    },

    initialize: function() {
        // Grab the div for the app.
        this.$app = $('#homeView');
    },

    index: function() {
        console.log('Creating new home view..');
        var homeView = new HomeView();

        this.showView(homeView);
        // var gameView = new GameView();        
        // this.$app.html(gameView.render().el);
    },

    showUsers: function() {
      var users = new UserCollection();
      
      var usersView = new UsersView({collection: users});
      this.showView(usersView);
    },

    showGames: function() {
      var games = new GameCollection();
      var gamesView = new GamesView({collection: games});
      this.showView(gamesView);
    },

    showView: function(view) {
      if (this.currentView) {
        this.currentView.remove();
      }
      this.$app.html(view.render().el);
      this.currentView = view;
    }

  });

  return RouterRouter;
});
