requirejs.config(
  {
    //To get timely, correct error triggers in IE,
    //force a define/shim exports check.
    baseUrl: 'assets/js/',
    enforceDefine: true,
    shim: {
      'jquery': { exports: '$' },
      'underscore': { exports: '_' },
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      }
    },
    paths: {
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
      underscore: '//underscorejs.org/underscore-min',
      backbone: '//backbonejs.org/backbone-min'
    }
  }
);
