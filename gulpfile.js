'use strict';

var gulp = require('gulp');

gulp.task('static:base', function() {

    return gulp.src([
        'client/**/*.*'
    ])
    .pipe(gulp.dest('server/static'));
});

gulp.task('default', ['static:base']);
