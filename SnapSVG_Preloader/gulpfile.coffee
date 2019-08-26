gulp = require 'gulp'
connect = require 'gulp-connect'
coffee = require 'gulp-coffee'

gulp.task 'connect', ->
  connect.server
    port: 1337
    livereload: on
    root: './app'

gulp.task 'coffee', ->
  gulp.src 'coffee/*.coffee'
  .pipe do coffee
  .pipe gulp.dest 'app/js'
  .pipe do connect.reload

gulp.task 'css', ->
  gulp.src 'app/css/*.css'
    .pipe do connect.reload

gulp.task 'html', ->
  gulp.src 'app/index.html'
    .pipe do connect.reload

gulp.task 'watch', ->
  gulp.watch 'coffee/*.coffee', ['coffee']
  gulp.watch 'app/css/*.css', ['css']
  gulp.watch 'app/index.html', ['html']

gulp.task 'default', ['coffee', 'connect', 'watch']
