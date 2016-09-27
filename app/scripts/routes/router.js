/*global define*/

define([
  'jquery',
  'backbone',
  'views/home',
  'views/users',
  'views/games',
  'views/play_game',
  'collections/user',
  'collections/game'
], function ($, Backbone, HomeView, UsersView, GamesView, PlayGameView, UserCollection, GameCollection) {
  'use strict';

  var RouterRouter = Backbone.Router.extend({
    routes: {
        '' : 'index',
        'users': 'showUsers',
        'games': 'showGames',
        'game/:id' : 'showGame'
    },

    initialize: function() {
        // Grab the div for the app.
        this.$app = $('#homeView');
        this.users = new UserCollection();
        this.games = new GameCollection();
    },

    // Home page
    index: function() {
        console.log('Creating new home view..');
        var homeView = new HomeView();

        this.showView(homeView);
    },

    // Users pages
    showUsers: function() {
      // var users = new UserCollection();
      
      var usersView = new UsersView({collection: this.users});
      this.showView(usersView);
    },

    // Games page
    showGames: function() {
      console.log('showGames..');
      // var games = new GameCollection();
      var gamesView = new GamesView({collection: this.games});
      this.showView(gamesView);
    },

    // Individual game page
    showGame: function(urlsafekey) {
      var game = this.games.get(urlsafekey);
      console.log(game);
      if (game) {
        var view = new PlayGameView({model: game});
        this.showView(view);
      }
    },

    // Helper method to swap views.
    showView: function(view) {
      if (this.currentView) {
        this.currentView.remove();
      }
      console.log('Calling view.render()');
      this.$app.html(view.render().el);
      this.currentView = view;
    }

  });

  return RouterRouter;
});
