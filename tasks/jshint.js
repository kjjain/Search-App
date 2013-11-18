 module.exports = function(grunt){
  grunt.config(
  ['jshint'], {
      all: ['Gruntfile.js', 'test/models/*.js', 'test/views/*.js', 'test/libs/*.js', 'test/mocktests/*.js', 'app/scripts/**/*.js'],
	      options: {
	        curly: true,
	        undef: false,
	        asi: false,
	        sub: true,
	        expr: true
	      }
    });
       grunt.loadNpmTasks('grunt-contrib-jshint');
}