App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('login');
  this.resource('balllon');
  this.resource('circulo');
  this.resource('session');

});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'hey'];
  }
});
