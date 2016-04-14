/**
*  @author       Giovanny Beltran <@Agar3s>
*/

var gulp      = require('gulp'),
    clean     = require('gulp-clean'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    zip       = require('gulp-zip'),
    filesize  = require('gulp-filesize');

var Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var replaceWords = [];

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
  .pipe(clean());
});

gulp.task('copy', ['clean'], function(){
  gulp.src('./app/assets/*')
  .pipe(gulp.dest('dist/assets'));

  gulp.src('./index.html')
  .pipe(gulp.dest('dist/'));
});


gulp.task('concat-scripts', ['copy'], function() {
  gulp.src(
    ['./app/js/intro.js',
     './app/js/setup.js',
     './app/js/events/keyEvents.js',   // optional-remove it for click/touch games
     './app/js/generatedSprites.js',
     './app/js/sprite.js',
     './app/js/layeredSprite.js',
     './app/js/map.js',
     './app/js/mapScene.js',
     './app/js/puzzle.js',
     './app/js/puzzleScene.js',
     './app/js/puzzleBible.js',
     './app/js/gameLoop.js',
     './app/js/outro.js'
  ])
  .pipe(concat('a.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/'))
});


gulp.task('default', ['concat-scripts'], function() {
  gulp.watch('app/js/*.js', ['concat-scripts']);

  gulp.src('./dist')
  .pipe(webserver({
    host:'0.0.0.0',
    livereload: true
  }));

});

// compress tasks
gulp.task('compress', function() {
  gulp.src('./dist/**')
  .pipe(zip('app.zip'))
  .pipe(gulp.dest('./'))
});

gulp.task('report', ['compress'], function(){
  gulp.src(['./app.zip'])
  .pipe(filesize())
});
