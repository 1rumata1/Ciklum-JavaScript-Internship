var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    gulpLess = require('gulp-less'),
    uglifyCSS = require('gulp-clean-css'),
    refresh = require('gulp-livereload'),
    lr = require("tiny-lr"),
    server = lr();

gulp.task("build", function(){
	gulp.run("lr-server", "scripts", "styles");
	gulp.watch("scripts/**", function() {
		gulp.run("scripts");
	});
	gulp.watch("styles/**", function() {
		gulp.run("styles");
	});
});

gulp.task("scripts", function () {
	gulp.src("scripts/*.js")
		.pipe(concat("bundle.js"))
		.pipe(uglify({
			compress:{
				drop_debugger: false
			}
		}))
		.pipe(gulp.dest("../public"))
		.pipe(refresh(server));
});

gulp.task("styles", function () {
	gulp.src("styles/*.less")
		.pipe(gulpLess())
		.pipe(concat("bundle.css"))
		.pipe(uglifyCSS())
		.pipe(gulp.dest("../public"))
		.pipe(refresh(server));
});

gulp.task('lr-server', function() {  
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
});