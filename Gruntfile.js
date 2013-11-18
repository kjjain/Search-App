 module.exports = function(grunt) {
 	// load all grunt tasks

 	grunt.loadTasks('tasks');

 	//   require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 	grunt.registerTask('build', ['stylus', 'minify', 'img']);
 	grunt.registerTask('default', ['exec:indexBB7', 'connect:short', 'build']);
 	grunt.registerTask('test', [
 		'exec:indexBB7',
 		'connect:short',
 		'exec:cucumber',
 		'mochacli:test',
 	]);
 	grunt.registerTask('cucumber', ['connect:short', 'exec:cucumber']);
 	grunt.registerTask('set-connect', ['setIndex', 'connect']);
 	grunt.registerTask('cucumber-remote', ['connect:short', 'exec:cucumberremote']);
 	grunt.registerTask('test-coverage', ['jscoverage', 'mochacli:testcoverage']);

 };