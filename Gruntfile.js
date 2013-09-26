module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      build: {
        files: 'assets/js/**',
        tasks: ['requirejs']
      },
      jst: {
        files: 'assets/templates/**/*.html',
        tasks: ['jst']
      },
      jshint: {
        files: '<%= target %>',
        tasks: ['jshint']
      }
    },

    requirejs: {
      compile_top: {
        options: {
          name : 'requires/test',  // mainで読み込むjsのpath
          baseUrl: "assets/js/",
          mainConfigFile: "assets/js/requires/base.js",
          out: "assets/js/min/aaaaaaaa.js"
        }
      }
    },

    jst: {
      compile: {
        options: {
          amd: true,
          templateSettings: {
            interpolate : /\{\{(.+?)\}\}/g
          },
          processName: function(filename) {
            return filename.replace(/(assets\/templates\/|.html)/g, '');
          }
        },
        files: {
          'assets/js/jst/templates.js': [
            'assets/templates/**/*.html'
          ],
          'assets/js/jst/common.js': [
            'assets/templates/**/*.html'
          ]
        }
      }
    },

    jshint: {
       all: {
         src: '<%= target %>'
       },
       watch: {
         src: '<%= grunt.regarde.changed %>'
       },
       options: {
         jshintrc: '.jshintrc'
       }
     },

     target: [
      'assets/js/models/*.js',
      'assets/js/requires/*.js',
      'assets/js/views/*.js',
      '!assets/js/jst/**/*.js'
    ],
  });

  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.loadNpmTasks('grunt-contrib-jshint');
}
