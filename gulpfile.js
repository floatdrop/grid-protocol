'use strict';

var gulp = require('gulp');
var exec = require('gulp-exec');
var ext = require('gulp-ext');

gulp.task('boop', function () {
    console.log('boop');
});

gulp.task('watch', function () {
    var watch = require('gulp-watch');
    return watch({glob: ['proto/*']}, ['boop']).on('data', function (file) {
        console.log(file);
    });
});

gulp.task('build', function () {
    gulp.src('./proto/**/*.proto')
        .pipe(exec('./node_modules/protobufjs/bin/proto2js <%= file.path %>', { pipeStdout: true }))
        .pipe(ext.replace('.json'))
        .pipe(gulp.dest('proto'));
});

gulp.task('default', ['build']);
