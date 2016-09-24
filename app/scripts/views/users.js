/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/user'
], function ($, _, Backbone, JST, UserView) {
  'use strict';

  var UsersView = Backbone.View.extend({
    template: JST['app/scripts/templates/users.ejs'],

    tagName: 'div',

    id: '',

    className: 'users-view',

    events: {
      'submit' : 'createUser'
    },

    initialize: function () {      
      this.listenTo(this.collection, 'add', this.addOne);
      this.collection.fetch();
    },

    render: function () {
      this.$el.html(this.template());
      console.log(this.collection.models);
      _.each(this.collection.models, function(user){
          console.log(user);
          var view = new UserView( {model: user} );
          var list = $('#user-list', this.el);
          list.append(view.render().el);
      }, this);

      return this;
    },

    addOne: function(user){
      console.log(user);
      var view = new UserView( {model:user} );
      var list = $('#user-list', this.el);
      list.append(view.render().el);
      
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
      this.collection.create(attributes,{
        success: function(result) {
          console.log(result);
        },
        error: function() {
          console.log('error!');
        }
      });
    }

  });

  return UsersView;
});
