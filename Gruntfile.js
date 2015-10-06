/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    lodash: {
      'dev': {
        
          // output location
          'dest': 'dist/ng-dash.js',
          'options': {
            // modifiers for prepared builds
            // modern, strict, compat
            // also accepts an array to allow combination with 'strict'
            'exports': ['none'],
            'iife': "angular.module('ngDash', []).factory('lodash', function(){%output% return _;})",
            'flags': [
               'development'
            ]
          }
      },
      prod: {
        
          // output location
        'dest': 'dist/ng-dash.min.js',
        'options': {
          // modifiers for prepared builds
          // modern, strict, compat
          // also accepts an array to allow combination with 'strict'
          'exports': ['none'],
          'iife': "angular.module('ngDash', []).factory('lodash', function(){%output% return _;})",
          'flags': [
             'production'

          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/*'
          ]
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-lodash');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Default task.
  grunt.registerTask('default', ['clean:dist', 'lodash:dev','lodash:prod']);

};
