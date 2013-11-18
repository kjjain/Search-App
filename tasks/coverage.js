 module.exports = function(grunt){
 grunt.config(
	['jscoverage'], {
      options: {
        inputDirectory: 'app/scripts',
        outputDirectory: 'app/scripts-cov'
      }
    });
 grunt.loadNpmTasks("grunt-jscoverage");
}
