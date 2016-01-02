var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
  src: 'src',
  build: 'build',
  js: 'src/**/*.js',
  demo: 'demo'
};

gulp.task('dev', ['build'], function () {

  browserSync.init({
    server: {
      baseDir: './'
    },
    files: ['./' + paths.demo + '/**'],
    open: false,
    logFileChanges: false
  });

  gulp.watch(paths.js, ['build']);
  gulp.watch(paths.build).on('change', reload);
});

gulp.task('build', function () {
  return gulp.src(paths.js).pipe(concat('prestrify.js')).pipe(gulp.dest(paths.build));
});