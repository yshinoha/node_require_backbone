console.log('models/user.jsが読み込まれました。');
define(['jquery', 'underscore', 'backbone'], function() {
  return Backbone.Model.extend({
    defaults: {
      name: 'no name',
      nickname: null,
      age: 0
    },
    initialize: function(attrs/*, options*/) {
      this.name = attrs.name;
      this.nickname = attrs.nickname;
      this.age = attrs.age;

      /*
      this.bind('change:text', function (model, val) {
          //console.log(model.previous('text'), val);
      });
      */
    }
  });
});

