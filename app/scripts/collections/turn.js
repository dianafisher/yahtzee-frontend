/*global define*/

define([
  'underscore',
  'backbone',
  'models/Turn'
], function (_, Backbone, TurnModel) {
  'use strict';

  var TurnCollection = Backbone.Collection.extend({
    model: TurnModel,

    urlRoot: 'http://localhost:12080/_ah/api/yahtzee/v1/game/',

    initialize: function(options) {
      console.log(options);
      this.url = this.urlRoot + options.urlsafe_key + '/turn';
    },

    parse: function(response) {
        console.log(response);
    }

  });

  return TurnCollection;
});
