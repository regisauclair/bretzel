// Config
var path_less_src = './src/assets/css/styles.less';
var path_all_less_src = './src/assets/css/*.less';
var path_css_dest = './dist/assets/css/';

var path_js_src = './src/assets/js/*.js';
var path_js_dest = './dist/assets/js/';
var path_js_dest_filename = 'global.min.js';

var path_img_src = ['./src/assets/img/'];
var path_img_dest = './dist/assets/img/';

var path_fonts_src = './src/assets/css/fonts/*';
var path_fonts_dest = './dist/assets/css/fonts/';

// Requires
var gulp = require('gulp');

// Include plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var styledown = require('gulp-styledown');

// behaviour on error
function onError(e) {
  console.log(e);
  this.emit('end');
}

// Styles LESS (LESS, autoprefixer, minify)
gulp.task('styles', function () {
  return gulp.src(path_less_src)
    .pipe(less())
    .on('error', onError)
    .pipe(autoprefixer())
    .pipe(rename({suffix: '.min'}))
    //.pipe(sourcemaps.init())
    .pipe(csso())
    //.pipe(sourcemaps.write('.', {includeContent: false}))
    .pipe(gulp.dest(path_css_dest));
});

// Scripts (minifiés, concaténés)
gulp.task('scripts',function() {
  return gulp.src(path_js_src)
    .pipe(uglify())
    .on('error', onError)
    .pipe(concat(path_js_dest_filename))
    .pipe(gulp.dest(path_js_dest));
});

// Images optimisées
gulp.task('images', function () {
  return gulp.src(path_img_src + '*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      svgoPlugins: [{
        removeViewBox: false
      }, {
        cleanupIDs: false
      }]
    }))
    .pipe(gulp.dest(path_img_dest));
});

// Fonts (simple copie des fontes)
gulp.task('fonts', function () {
  return gulp.src(path_fonts_src)
    .pipe(gulp.dest(path_fonts_dest));
});

// Styledown (styleguide)
gulp.task('styleguide', function() {
  gulp.src(path_all_less_src)
  .pipe(styledown({
    config: 'dist/assets/css/config.md',
    filename: 'styleguide.html'
  }))
  .on('error', onError)
  .pipe(gulp.dest('.'));
});

// Common tasks
gulp.task('styles', ['styles']);
gulp.task('all', ['styles','scripts','images','fonts']);
gulp.task('default', ['all']);

// Watcher (je surveille tous les *.less et *.js)
gulp.task('watch', function() {
  /*browserSync.init({
    //proxy: 'http://localhost:5000',
    server: {
        baseDir: './dist/'
    }
  });*/
  gulp.watch([path_all_less_src], ['styles', /*browserSync.reload, */ /*'styleguide'*/ ]);
  gulp.watch([path_js_src], ['scripts']);
});

