 module.exports = function(grunt){
 grunt.config(
['mochacli'], {
      options: {
        reporter: 'nyan',
        bail: true,
        watch: true,
        'fail-fast': true
      },
      test: {
        options: {
          reporter: 'nyan',
          files: ['test/models/*.js']
        }
      },
      testcoverage: {
        options: {
          reporter: 'html-cov',
          files: ['test/mocha-helper-cov.js', 'test/models/*.js', 'test/libs/*.js'],
          output: 'coverage.html'
        }
      }
  });
 grunt.loadNpmTasks('grunt-mocha-cli');
}