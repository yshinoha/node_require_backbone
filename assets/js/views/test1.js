console.log('views/test1.jsが読み込まれました。');
define(['jquery', 'underscore', 'backbone'], function() {
  var testView1 = Backbone.View.extend({
    el: 'body',
    defaults: {
    },
    event: {
      'click aa': 'test'
    },
    initialize: function() {
      console.log('testView1のnewです。');
    },
    render: function() {
      $('#view').append('testView1のrenderです。<br/>');
      return 'testView1のrenderです。';
    }
  });

  return testView1;
});
