App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('login');
  this.resource('globo');
  this.resource('circle');
  this.resource('session');
  this.resource('colors');
  this.resource('timers');
  this.resource('viste');
  this.resource('viste_si');
  this.resource('viste_no');
  this.resource('relajacion');
  this.resource('explica');

});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'hey'];
  }
});
