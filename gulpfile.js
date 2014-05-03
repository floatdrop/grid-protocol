'use strict';

var gulp = require('gulp');
var exec = require('gulp-exec');
var ext = require('gulp-ext');

gulp.task('build', function () {
    gulp.src('./proto/**/*.proto')
        .pipe(exec('./node_modules/protobufjs/bin/proto2js <%= file.path %>', { pipeStdout: true }))
        .pipe(ext.replace('.json'))
        .pipe(gulp.dest('proto'));
});

gulp.task('default', ['build']);
