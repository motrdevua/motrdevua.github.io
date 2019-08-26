
/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    pngquant = require('imagemin-pngquant'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

var path = {
  build: {
    html: 'dist/',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img',
    fonts: 'dist/fonts'
  },
  src: {
    html: 'src/*.html',
    style: 'src/style/main.scss',
    js: 'src/js/main.js',
    img: 'src/img/**/*.*',
    sprites: 'src/style/sprites/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    style: 'src/style/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './dist'
};

// HTML

gulp.task('html:build', function(){
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({stream: true}));
});

// JS

gulp.task('js:build', function(){
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps', {
			addComment : false,
			mapFile : "main.js.map"
		}))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.reload({stream: true}));
});

// STYLES

gulp.task('style:build', function(){
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({
      browsers: ['last 15 versions'],
      cascade: true
    }))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('../maps', {
			addComment : false,
			mapFile : "main.css.map"
		}))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({stream: true}));
});

// SPRITES

gulp.task('sprites:build', function () {
  var spriteData = gulp.src(path.src.sprites)
    .pipe(spritesmith({
      imgName: 'sprites.png',
      cssName: 'sprites.scss',
      algorithm: 'binary-tree',
      padding: 4
    }));
  spriteData.img.pipe(gulp.dest(path.src.img));
  spriteData.css.pipe(gulp.dest(path.src.style));
  gulp.src(path.src.sprites).pipe(browserSync.reload({stream: true}));
});

// IMAGES

gulp.task('image:build', function(){
  gulp.src(path.src.img)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.reload({stream: true}));
});

// FONTS

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});

// WATCH TASK

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('sprites:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

// BUILD TASK

gulp.task('build', [
  'html:build',
  'js:build',
  'sprites:build',
  'style:build',
  'fonts:build',
  'image:build'
]);

// CLEAN TASK

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

// LOCAL SERVER

var config = {
  server: {
    baseDir: "./dist"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "TEST"
};

gulp.task('webserver', function () {
  browserSync(config);
});

// MAIN TASK

gulp.task('default', ['build', 'webserver', 'watch']);
