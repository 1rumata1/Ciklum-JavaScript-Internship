var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gulpLess = require('gulp-less'),
    uglifyCSS = require('gulp-clean-css'),
    server = require('gulp-server-livereload');

gulp.task("build scripts", function () {
	gulp.src("scripts/*.js")
		.pipe(concat("bundle.js"))
		.pipe(uglify({
			compress:{
				drop_debugger: false
			}
		}))
		.pipe(gulp.dest("../public"));
});