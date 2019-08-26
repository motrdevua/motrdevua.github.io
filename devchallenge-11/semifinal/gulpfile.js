var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

var path = {
  build: {
    html: 'dist/',
    css: 'dist/css',
    img: 'dist/img',
    fonts: 'dist/fonts',
    svg: 'dist/svg'
  },
  src: {
    html: 'src/*.html',
    style: 'src/style/main.scss',
    img: 'src/img/*.*',
    fonts: 'src/fonts/**/*.*',
    svg: 'src/svg/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    style: 'src/style/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*',
    svg: 'src/svg/**/*.*'
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

// STYLES

gulp.task('style:build', function(){
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer({
      browsers: ['last 15 versions'],
      cascade: true
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('../maps', {
			addComment : false,
			mapFile : "main.css.map"
		}))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({stream: true}));
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

// SVG

gulp.task('svg:build', function() {
  gulp.src(path.src.svg)
    .pipe(gulp.dest(path.build.svg));
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
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.svg], function(event, cb) {
    gulp.start('svg:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

// BUILD TASK

gulp.task('build', [
  'html:build',
  'style:build',
  'image:build',
  'svg:build',
  'fonts:build'
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
