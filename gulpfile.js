'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        logPrefix: 'VG',
        notify: false,
        port: 8080,
        open: true,
        watchOptions: {
            interval: 1500,
            debounceDelay: 1000
        },
        ghostMode: {
            clicks: false,
            location: false,
            forms: false,
            scroll: false
        },
        host: 'localhost'
    });

    gulp.watch(['*.html'], reload);
    gulp.watch(['*.css'], reload);
});

gulp.task('default', ['serve'], function() {    
});
