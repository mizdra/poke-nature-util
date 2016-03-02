'use strict';

var merge = require('merge2');
var del = require('del');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
    var tsResult = gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('./lib')),
        tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./lib'))
    ]);
});

gulp.task('watch', ['default'], () => {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('clean', del.bind(null, ['lib']));

gulp.task('default', ['build']);