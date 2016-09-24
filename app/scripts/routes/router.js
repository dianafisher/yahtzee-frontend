/*global define*/

define([
  'jquery',
  'backbone',
  'views/home',
  'views/users',
  'collections/user'
], function ($, Backbone, HomeView, UsersView, UserCollection) {
  'use strict';

  var RouterRouter = Backbone.Router.extend({
    routes: {
        '' : 'index',
        'users': 'showUsers'
    },

    initialize: function() {
        // Grab the div for the app.
        this.$app = $('#gameView');
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
