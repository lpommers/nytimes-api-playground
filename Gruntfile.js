'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9000,
          livereload: true,
          open: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'styles/css/main.css' : 'styles/sass/main.scss'
        }
      }
    },
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['scripts/**/*.js', 'scripts/**/*.js']
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      files: '<%= jshint.myFiles %>',
      tasks: ['jshint'],
      options: {
        livereload: true
      },
      target: {
        files: ['index.php', 'styles/**/*.css', 'scripts/**/*.js']
      }
    }
  });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task.
  grunt.registerTask('default', ['jshint', 'connect', 'watch', 'sass']);
  // grunt.registerTask('test', ['jshint']);
};
