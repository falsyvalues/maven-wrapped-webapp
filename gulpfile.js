var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('src/main/webapp/**/*')
    .pipe(gulp.dest('./target/generated-webapp'));
});
