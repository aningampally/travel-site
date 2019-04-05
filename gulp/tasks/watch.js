var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
       server: {
           baseDir: "app"
       }
    });

     watch('./app/index.html', function () {
        browserSync.reload();
     });
   
   watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');  // gulp.start('styles');
        
     });
 }); 
//injecting css changes to browsersync without reloading the page  //styles task is a dependency of inject task
 gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());

});