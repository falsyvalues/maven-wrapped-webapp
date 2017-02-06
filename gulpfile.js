var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('src/main/frontend/**/*')
    .pipe(gulp.dest('./target/generated-webapp'));
});
