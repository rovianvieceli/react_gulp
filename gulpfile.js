var gulp = require('gulp');
var rename = require('gulp-rename');
var reactEasy = require('gulp-react-easy');

gulp.task('watcher', function() {
  gulp.watch('./src/**/*',['build']);
});

gulp.task('build', function() {
  return reactEasy({
      file: './src/app.jsx',
      debug: true // optional, false by default
    })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['build','watcher']);