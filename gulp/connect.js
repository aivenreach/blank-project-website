// Generated by CoffeeScript 1.9.0
(function() {
  var connect, gulp;

  gulp = require('gulp');

  connect = require('gulp-connect');

  gulp.task('connect', function() {
    return connect.server({
      root: 'build',
      port: '1337',
      livereload: true
    });
  });

}).call(this);
