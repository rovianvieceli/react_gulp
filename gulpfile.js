var gulp = require('gulp');
var rename = require('gulp-rename');
var reactEasy = require('gulp-react-easy');

gulp.task('default', ['build','watcher']);

gulp.task('watcher', function() {
  gulp.watch('./src/js/**/*',['js']);
});

gulp.task('build', function() {
  return reactEasy({
      file: './src/js/app.jsx',
      debug: true // optional, false by default
    })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'));
});
