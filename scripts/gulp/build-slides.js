var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var del = require('del');

function getPath(basePath) {
  return function (path) {
    return basePath + path;
  }
}

var paths = {
  build: 'build'
};

function buildSlides() {

  gulp.task('build-slides', function () {
    var basePath = gutil.env['basePath'];
    if (!basePath) {
      basePath = './src';
    }

    var base = getPath(basePath);
    del.sync(base(paths.build));
    gulp.src(base('**/config.js')).pipe(concat('config.js')).pipe(gulp.dest(base(paths.build)));


  });

}

module.exports = buildSlides;