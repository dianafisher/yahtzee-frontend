/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',  
], function ($, _, Backbone, JST) {
  'use strict';

  var PlayGameView = Backbone.View.extend({
    template: JST['app/scripts/templates/play_game.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {      
      'click #roll-dice': 'rollDice',
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      // this.turns = new TurnCollection(this.model.attributes);
    },

    render: function () {      
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    rollDice: function() {
      console.log('rollDice function..');
      console.log(this.model);
      var urlRoot = 'http://localhost:12080/_ah/api/yahtzee/v1/game';
      var url = urlRoot + '/' + this.model.attributes.urlsafe_key + '/roll';
      
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'POST',
        success:function(data) {
          console.log(data);
          for (var i = 0; i < 5; i++) {
            $('.roll-result').append('<li>' + data.dice[i] + '</li>');
          }          
        }
      });
    },

    // createTurn: function () {            
    //   this.turns.create({}, {
    //     success: function(result) {          
    //       console.log(result);
    //       var dice = result.attributes.dice;
    //       console.log(dice);

    //       for (var i = 0; i < 5; i++) {
    //         $('.roll-result').append('<li class="dice" id="die-one"></li>');
    //       }    
    //     },
    //     error: function(model, xhr) {          
    //       console.log(xhr.status);
    //       console.log(xhr.responseText);          
    //     }
    //   });
    // },

  });

  return PlayGameView;
});
