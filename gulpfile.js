var gulp         = require('gulp'),
    less         = require('gulp-less'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename');



gulp.task('less', function(){
     return gulp.src('app/less/styles.less')
           .pipe(less())
           //.pipe(cssnano()) 
           //.pipe(concat('bootstrap.css'))
           .pipe(gulp.dest('app/css'))
           .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', ['libs-scripts'], function(){
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js'
    ])
    .pipe(gulp.dest('app/js'));
});

gulp.task('libs-scripts', function(){
    return gulp.src([
         'app/libs/bootstrap/dist/js/bootstrap.min.js',
         'app/js/bootstrap-select.min.js',
         'app/js/jquery.scrollbar.min.js',
         'app/js/jquery.mask.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('libs-css', ['less'], function(){
     return gulp.src([
          'app/libs/slick-carousel/slick/slick.css'
     ])
     .pipe(cssnano()) 
     .pipe(rename({basename: 'libs.min'})) 
     .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false // false
    });
});

gulp.task('watch', ['browser-sync', 'libs-css', 'scripts'], function(){
 
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    
    gulp.watch('app/images/**/*', browserSync.reload);
    gulp.watch('app/pictures/**/*', browserSync.reload);  
});

