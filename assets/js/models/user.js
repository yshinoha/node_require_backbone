console.log('models/user.jsが読み込まれました。');
define(["jquery", "underscore", "backbone"], function() {
  return Backbone.Model.extend({
    defaults: {
      name: 'shinofara',
      nickname: 'しのふぁら',
      age: 26
    },
    initialize: function (attrs, options) {
        this.bind("change:text", function (model, val) {
            console.log(model.previous("text"), val);
        });
    }
  });
});

