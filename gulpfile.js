var gulp = require('gulp');

gulp.task('sass', function(){
	var compass = require('gulp-compass');
	gulp.src('./sass/*.scss')
		.pipe(compass({
			config_file: './config.rb'
		}))
		.pipe(gulp.dest('./build'))
})