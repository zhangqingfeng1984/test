var gulp = require('gulp');

/* using compass to compile sass files and output a minify css */
gulp.task('css', function(){
	var compass = require('gulp-compass');
	var minifyCSS = require('gulp-minify-css');

	var compile = function(){
		gulp.src('./sass/*.scss')
			.pipe(compass({
				config_file: './config.rb',
				css: './build',
				sass: './sass'
			}))
			.pipe(minifyCSS())
			.pipe(gulp.dest('./build'));

		console.log('create css done.');
	}
	
	gulp.watch('./sass/**/*.scss', compile);
});


gulp.task('js', function(){
	var webpack = require('webpack');
	// returns a Compiler instance
	var compiler = webpack({
	    entry: "./js/main.js",
	    output: {
	        path: './build',
	        filename: "bundle.js"
	    },
	    module: {
	        loaders: [
	            { test: /\.js$/, loader: "babel" }
	        ]
	    },
	    plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]
	});

	/*compiler.run(function(err, stats) {
	    console.log('create js done.');
	});*/
	
	// or
	compiler.watch({ // watch options:
	    aggregateTimeout: 300, // wait so long for more changes
	    poll: true // use polling instead of native watchers
	    // pass a number to set the polling interval
	}, function(err, stats) {
	    console.log('create js done.');
	});
	
});

gulp.task('server', function(){
	var exec = require('child_process').exec;
	exec('node nodeserver.js');
});

gulp.task('dev', ['css','js']);