/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/user',
  'collections/game' 
], function ($, _, Backbone, JST, Users, Games) {
  'use strict';

  var HomeView = Backbone.View.extend({
    template: JST['app/scripts/templates/home.ejs'],

    tagName: 'div',

    id: '',

    className: 'home-view',

    events: {
      'submit' : 'createUser'
    },

    initialize: function () {
      this.users = new Users();
      this.users.fetch();

      var games = new Games();
      games.fetch();
    },

    render: function () {
      this.$el.html(this.template());
      return this;
    },

    createUser: function(e) {
      e.preventDefault();
      var username = this.$('#input-name').val().trim();
      console.log(username);
      var email = this.$('#input-email').val().trim();

      // Call the API to create the new user.
      var attributes = {
        user_name: username,
        email: email
      };
      this.users.create(attributes);
    },

    createGame: function(e) {
      e.preventDefault();
      console.log('createGame button pressed');
      // call API..
      $.ajax({
        type: 'POST',
        url:'https://yahtzee-1238.appspot.com/_ah/api/yahtzee/v1/game',
        data: {'user_name' : 'dfisher'},
        success:function(result){
          console.log(result);
        },
        error: function(){
          console.log('error');
        }
      });
    },
  });

  return HomeView;
});
