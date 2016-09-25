/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',  
  'collections/game',
  'views/game' 
], function ($, _, Backbone, JST, Games, GameView) {
  'use strict';

  var HomeView = Backbone.View.extend({
    template: JST['app/scripts/templates/home.ejs'],

    tagName: 'div',

    id: '',

    className: 'home-view',

    events: {
      'submit' : 'createGame'
    },

    initialize: function () {      
      this.games = new Games();
      this.games.fetch();
    },

    render: function () {
      this.$el.html(this.template());
      return this;
    },    

    createGame: function(e) {
      e.preventDefault();
      console.log('createGame button pressed');
      var username = this.$('#input-name').val().trim();
      console.log(username);

      var self = this;
      // Call the API to create the new game.
      var attributes = {
        user_name: username        
      };
      this.games.create(attributes,{
        success: function(result) {          
          var gameView = new GameView( {model: result} );                  
          var div = $('#game-view', self.el);
          div.append(gameView.render().el);          
        },
        error: function() {
          console.log('error!');
        }
      });

      // // call API..
      // $.ajax({
      //   type: 'POST',
      //   url:'https://yahtzee-1238.appspot.com/_ah/api/yahtzee/v1/game',
      //   data: {'user_name' : 'dfisher'},
      //   success:function(result){
      //     console.log(result);
      //   },
      //   error: function(){
      //     console.log('error');
      //   }
      // });

    },
  });

  return HomeView;
});
