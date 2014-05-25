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

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    // implement this hook in your own subclasses and run your jQuery logic there
	  
  }
});

App.ColorsView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	// perform your jQuery logic here
    	showDialog();
    });
  }
});

App.GloboView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	// perform your jQuery logic here

    $(function() {
      $( "#dialog-globo" ).dialog({
        resizable: false,
        height:140,
        modal: true,
        buttons: {
          "Ok": function() {
            $( this ).dialog( "close" );
          }
        }
      });
    });


    });
  }
});









App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'hey'];
  }
});
