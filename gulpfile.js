var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var dist_files = ['./lib/_components.technical-nav.scss', './lib/technical-header.jade','./lib/technical-nav.css'];

gulp.task('watch', function() {
  gulp.watch(__dirname + '/lib/*.scss', ['scss']);
});

gulp.task('scss', function() {
  gulp.src(__dirname + '/lib/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: ["bower_components/foundation/scss/"]
    }))
    .pipe(gulp.dest('./lib'));
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'server.js',
      ext: 'scss jade',
      ignore: [
        'dist/'
      ],
      stdout: true,
    })
    .on('readable', function() {
      this.stdout
        .pipe(process.stdout);
      this.stderr
        .pipe(process.stderr);
    });
});

gulp.task('dist', function() {
  gulp.src(dist_files)
    .pipe(gulp.dest('dist/'));
  gulp.src('./lib/bower.json')
    .pipe(gulp.dest('./'));

  // TODO: Automate bower register
});

gulp.task('dev', ['scss', 'nodemon', 'watch']);
gulp.task('build', ['scss', 'dist'])
gulp.task('default', ['dev']);
