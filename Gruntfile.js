module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

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
          'assets/jst/templates.js': [
            'assets/templates/**/*.html'
          ],
          'assets/jst/common.js': [
            'assets/templates/**/*.html'
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jst');
}
