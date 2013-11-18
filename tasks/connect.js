 module.exports = function(grunt){
 grunt.config(
 ['connect'], {
      short: {
        options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost',
          keepalive: false
        }
      },
      long: {
        options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: '0.0.0.0',
          keepalive: true
        }
      }
    });

 grunt.loadNpmTasks('grunt-contrib-connect');
} 