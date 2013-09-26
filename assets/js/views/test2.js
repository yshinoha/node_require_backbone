console.log('views/test2.jsが読み込まれました。');

define(['jquery', 'underscore', 'backbone'], function() {
  return Backbone.View.extend({
    el: 'body',
    defaults: {},
    initialize: function() {
      console.log('========================');
      console.log(this);
      console.log('========================');
      console.log('testView2のnewです。');
    },
    render: function() {
      $('#view').append('testView2のrenderです。<br/>');

      console.log('======= START this.model.get ======');
      console.log('model:text = ' + this.model.get('text'));
      console.log('======= END this.model.get ======');

      if (this.options.user) {
        console.log('user name = ' + this.options.user.name);

      }
      return 'testView2のrenderです。';
    }
  });
});

