/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/user'
], function ($, _, Backbone, JST, Users) {
  'use strict';

  var CreateUserView = Backbone.View.extend({
    template: JST['app/scripts/templates/create_user.ejs'],

    tagName: 'div',

    id: '',

    className: 'create-user',

    events: {
      'submit': 'createUser'
    },

    initialize: function () {
      this.users = new Users();
      this.users.fetch();
      // this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template());
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
    }

  });

  return CreateUserView;
});
