
 module.exports = function(grunt){
 grunt.config(
	['watch'], {
      scripts: {
        files: ['test/**/*.js', 'app/**/*.js'],
        tasks: ['test', 'jshint']
      }
 	});

 grunt.loadNpmTasks('grunt-contrib-watch');
}