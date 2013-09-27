console.log('views/view.jsが読み込まれました。');
define(['Backbone'], function() {
  return Backbone.View.extend({
    el: 'body',
    defaults: {
    },
    initialize: function() {
      console.log('Userのnewです。');
    },
    render: function() {
      var user = this.model.attributes;
      $(this.el).html(JST.hello({user: user}));
    }
  });
});
