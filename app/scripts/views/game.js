/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
   
], function ($, _, Backbone, JST) {
  'use strict';

  var GameView = Backbone.View.extend({
    template: JST['app/scripts/templates/game.ejs'],

    tagName: 'div',

    id: '',

    className: 'game-view',

    events: {
      // 'click .btn': 'createGame'      
    },

    initialize: function () {
    },

    render: function () {
      // this.$el.html(this.template(this.model.toJSON()));
      console.log('GameView render...');
      this.$el.html(this.template(this.model.attributes));
      return this;
    },              

  });

  return GameView;
});
