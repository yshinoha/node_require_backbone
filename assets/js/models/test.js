console.log('models/test.jsが読み込まれました。');
define(['jquery', 'underscore', 'backbone'], function() {
  return Backbone.Model.extend({
    initialize: function(attrs, options) {
      this.attrs = attrs;
      this.options = options;
       /*
        this.bind('change:text', function (model, val) {
            console.log(model.previous('text'), val);
        });
      */
    }
  });
});
